const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ghpages = require('gh-pages');

// Build the project in development mode for better error messages
console.log('Building the project in development mode for debugging...');
execSync('vite build --mode development', { stdio: 'inherit' });

// Create .nojekyll file
console.log('Creating .nojekyll file...');
fs.writeFileSync(path.join(__dirname, 'dist', '.nojekyll'), '');

// Fix the index.html file
console.log('Modifying index.html for debugging...');
const indexPath = path.join(__dirname, 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace module types with text/javascript
indexContent = indexContent.replace(/type="module"/g, 'type="text/javascript"');

// Add enhanced error handling script
const errorHandlingScript = `
<script>
  // Store original console methods
  const originalConsoleError = console.error;
  
  // Override console.error to capture and display React errors
  console.error = function() {
    // Call original function
    originalConsoleError.apply(console, arguments);
    
    // Check if this is a React error
    const errorMsg = Array.from(arguments).join(' ');
    if (errorMsg.includes('React') || errorMsg.includes('Error #299')) {
      const errorDiv = document.createElement('div');
      errorDiv.style.position = 'fixed';
      errorDiv.style.top = '0';
      errorDiv.style.left = '0';
      errorDiv.style.width = '100%';
      errorDiv.style.backgroundColor = '#ffdddd';
      errorDiv.style.color = '#770000';
      errorDiv.style.padding = '20px';
      errorDiv.style.zIndex = '9999';
      errorDiv.style.fontFamily = 'monospace';
      errorDiv.style.whiteSpace = 'pre-wrap';
      errorDiv.style.overflow = 'auto';
      errorDiv.style.maxHeight = '80vh';
      
      errorDiv.innerHTML = '<h2>React Error Detected</h2><pre>' + 
        Array.from(arguments).map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join('\\n') + '</pre>';
      
      document.body.prepend(errorDiv);
    }
  };
  
  // Global error handler
  window.onerror = function(message, source, lineno, colno, error) {
    console.error('Global error:', message, 'at', source, lineno, colno, error);
    return false;
  };
  
  // React specific error codes
  window._reactErrorCodeLookup = {
    "299": "React.createContext: App context found with duplicate ContextProvider. Ensure there is only one ContextProvider for a given context."
  };
</script>
`;

// Insert the error handling script right after the <head> tag
indexContent = indexContent.replace('<head>', '<head>' + errorHandlingScript);

// Write the modified content back
fs.writeFileSync(indexPath, indexContent);

// Create a copy of index.html as 404.html for SPA routing
fs.copyFileSync(indexPath, path.join(__dirname, 'dist', '404.html'));

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
ghpages.publish('dist', { 
  dotfiles: true,
  message: 'Enhanced debug deployment for React Error #299'
}, function(err) {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployed debugging version successfully!');
    console.log('Check your site for more detailed error information.');
  }
});