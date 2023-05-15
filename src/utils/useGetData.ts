import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetData = <T>(linkName: string) => {
 const [isLoading, setIsLoading] = useState(false);
 const [data, setData] = useState<T[]>([]);
    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://swapi.dev/api/planets/?page=${linkName}`);
            setData(response.data.results);
        } catch (e) {
            console.log('Error', e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { getData().then(); }, []);

 return { data, isLoading };
};

export default useGetData;
