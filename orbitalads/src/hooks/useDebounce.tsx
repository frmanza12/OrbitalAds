import {useState, useEffect} from 'react';

const useDebounce = (val:string , delay:number) => {
    const [debouncedValue, setDebouncedValue] = useState(val);
    
    useEffect(() => {
        const handler = setTimeout(() => {
        setDebouncedValue(val);
        }, delay);
    
        return () => {
        clearTimeout(handler);
        };
    }, [val, delay]);
    
    return debouncedValue;
    }

export default useDebounce;