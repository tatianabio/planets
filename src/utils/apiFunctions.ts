import axios from 'axios';
import { IPlanet } from '../mock';

interface IPlanetsData {
    results: IPlanet[];
    count: number;
}

const getPlanetsData = async (linkName: string): Promise<IPlanetsData> => {
    const { data } = await axios.get(`https://swapi.dev/api/planets/?page=${linkName}`);

    return data as IPlanetsData;
};

export default getPlanetsData;
