import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IPlanet } from '../mock';

interface IPlanetsData {
    results: IPlanet[];
    count: number;
}

const useGetData = (currentPage: number) => {
    const fetchData = async (page: number): Promise<IPlanetsData> => {
        const { data } = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);

        return data as IPlanetsData;
    };

    const { data: planetsData, isLoading: isPlanetDataLoading } = useQuery(['planets', currentPage], () => fetchData(currentPage), { keepPreviousData: true, refetchOnWindowFocus: false });

    const planetsArray = planetsData?.results || [];
    const planetsCount = planetsData?.count;
    const numberPerPage = planetsArray?.length || 1;

    const pagesNumber = Math.ceil(planetsCount / numberPerPage);

 return { planetsArray, planetsCount, isPlanetDataLoading, numberPerPage, pagesNumber };
};

export default useGetData;
