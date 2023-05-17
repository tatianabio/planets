import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetData = <T>(linkName: string) => {
 const [isLoading, setIsLoading] = useState(false);
 const [data, setData] = useState<T[]>([]);
 const [count, setCount] = useState<number>(0);
 const [numberPerPage, setNumberPerPage] = useState<number>(0);
    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://swapi.dev/api/planets/?page=${linkName}`);
            setData(response.data.results);
            setCount(response.data.count);
            setNumberPerPage(response.data.results.length);
        } catch (e) {
            console.log('Error', e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { getData().then(); }, [linkName]);

 return { data, count, isLoading, numberPerPage };
};

export default useGetData;
