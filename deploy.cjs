const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ghpages = require('gh-pages');

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Create .nojekyll file
console.log('Creating .nojekyll file...');
fs.writeFileSync(path.join(__dirname, 'dist', '.nojekyll'), '');

// Fix the index.html file to address MIME type issues
console.log('Fixing MIME type issues...');
const indexPath = path.join(__dirname, 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace module types with text/javascript
indexContent = indexContent.replace(/type="module"/g, 'type="text/javascript"');

// No need to modify asset paths for user sites - they're already at the root

// Write the modified content back
fs.writeFileSync(indexPath, indexContent);

// Create a copy of index.html as 404.html for SPA routing
console.log('Creating 404.html for client-side routing...');
fs.copyFileSync(indexPath, path.join(__dirname, 'dist', '404.html'));

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
ghpages.publish('dist', { 
  dotfiles: true,
  message: 'Auto-deploy with MIME type fixes'
}, function(err) {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployed successfully! Your site should be available at:');
    console.log(`https://myusername.github.io/`); // Replace with your actual username
  }
});