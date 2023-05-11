export interface IPlanet {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
}

export const planets: IPlanet[] = [
    {
        name: 'Tatooine',
        rotation_period: 23,
        orbital_period: 304,
        diameter: 10465,
        climate: 'arid',
    },
    {
        name: 'Alderaan',
        rotation_period: 24,
        orbital_period: 364,
        diameter: 12500,
        climate: 'temperate',
    },
    {
        name: 'Yavin IV',
        rotation_period: 24,
        orbital_period: 4818,
        diameter: 10200,
        climate: 'temperate, tropical',
    },
    {
        name: 'Hoth',
        rotation_period: 23,
        orbital_period: 549,
        diameter: 7200,
        climate: 'frozen',
    },
    {
        name: 'Dagobah',
        rotation_period: 23,
        orbital_period: 341,
        diameter: 8900,
        climate: 'murky',
    },
];
