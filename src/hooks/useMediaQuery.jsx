import { useState, useEffect } from "react";

// a custom hook that determines if the screen matches a given media query
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false); // state that stores whether query matches screen size

    // runs when matches or query changes
    useEffect(() => {
        const media = window.matchMedia(query); // query listener
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener); // add listener to window's resize event
        return () => window.removeEventListener("resize", listener); //cleanup
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;