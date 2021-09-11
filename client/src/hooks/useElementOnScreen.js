import React, {useState, useMemo, useEffect} from 'react'

const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries => {
        const [entry] = entries; // const entry = entries[0]
        setIsVisible(entry.isIntersecting); 
    }
    const optionsMemo = useMemo(() => { //we use useMemo to ensure nothing changes on rerendering 
        return options
    }, [options]);

    // creating the intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if(currentTarget) observer.observe(currentTarget);

        return () => { 
            // sort of like a cleanup function
            if (currentTarget) observer.unobserve(currentTarget);
        }
    }, [targetRef, optionsMemo]);

    return isVisible;
}

export default useElementOnScreen;