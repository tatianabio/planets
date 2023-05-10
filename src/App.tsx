import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

interface IPlanet {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
}

function App() {
    const planets: IPlanet[] = [
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

    const renderInfoPlanets = (infoPlanets: IPlanet[]) => {
        return (
            infoPlanets.map(({ name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter, climate }) => {
                return (
                  <li className='planet-info__item' key={name}>
                    <span>{name}</span>
                    <span>{rotationPeriod}</span>
                    <span>{orbitalPeriod}</span>
                    <span>{diameter}</span>
                    <span>{climate}</span>
                  </li>
                );
            })
        );
    };

  return (
    <section>
      <h1>Planets</h1>
      <div className='planet-info__heading'>
        <span>Name</span>
        <span>Rotation period</span>
        <span>Orbital period</span>
        <span>Diameter</span>
        <span>Climate</span>
      </div>
      <ul className='planet-info__list'>{renderInfoPlanets(planets)}</ul>
    </section>
  );
}

export default App;
