import { useState, useEffect } from "react";
export function useWindwoScorll() {
    const [scorll, setScorll] = useState(0);
    window.addEventListener('scroll', () => {
        setScorll(document.documentElement.scrollTop)
    })
    return scorll
}

export const useSession = (defaultValue, key) => {
    const [sKey, setSKey] = useState(defaultValue);
    useEffect(() => {
        sessionStorage.setItem(key, sKey)
    }, [sKey, key])
    return { sKey, setSKey }
}