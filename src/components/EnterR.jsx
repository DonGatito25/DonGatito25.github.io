import { useEffect, useRef } from "react"

export const EnterR = ({ children }) => {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add("visible-r")
            } else {
                ref.current.classList.remove("visible-r")
            }
        }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [])

    return <div ref={ref} className="reveal-r">{children}</div>
}