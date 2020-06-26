import { useState, useCallback, useEffect } from "react";
import localforage from "localforage";

const useLocalforage = <T>(key: string): [(T|null), (newData: T|null) => void] => {
    const [data, setData] = useState<T|null>(null);

    useEffect(() => {
      localforage.getItem<T>(key).then((value: T) => {
        setData(value);
    });
    }, [key]);


    const update = useCallback((newData: T|null) => {
        setData(newData);
        localforage.setItem(key, newData);
    }, [key]);
    
    return [
        data,
        update
    ]
}

export default useLocalforage;