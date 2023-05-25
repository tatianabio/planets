import axios, { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IPlanet } from '../mock';

interface IPlanetsData {
    results: IPlanet[];
    count: number;
}

const fetchPlanetsData = async (page: number): Promise<IPlanetsData> => {
    const result = await axios.get<IPlanetsData, AxiosResponse<IPlanetsData>>(`https://swapi.dev/api/planets/?page=${page}`);

    return result.data;
};
fetchPlanetsData.id = 'planets';

const useGetData = (currentPage: number) => {
    const { data: planetsData, isLoading: isPlanetDataLoading } = useQuery([fetchPlanetsData.id, currentPage], () => fetchPlanetsData(currentPage), { keepPreviousData: true, refetchOnWindowFocus: false });

    const planetsArray = planetsData?.results || [];
    const planetsCount = planetsData?.count;
    const numberPerPage = planetsArray?.length || 1;

    const pagesNumber = Math.ceil(planetsCount / numberPerPage);

 return { planetsArray, planetsCount, isPlanetDataLoading, numberPerPage, pagesNumber };
};

export default useGetData;
