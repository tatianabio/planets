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

    const planetsCount = 60;

    const renderInfoPlanets = (infoPlanets: IPlanet[]) => {
        return (
            infoPlanets.map(({ name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter, climate }) => {
                return (
                  <tr className='planets-table__row' key={name}>
                    <td>{name}</td>
                    <td>{rotationPeriod}</td>
                    <td>{orbitalPeriod}</td>
                    <td>{diameter}</td>
                    <td>{climate}</td>
                  </tr>
                );
            })
        );
    };

    const renderPaginationButton = (totalCount: number, activeNumber: number) => {
        const numberPerPage = 10;
        const pagesNumber = Math.ceil(totalCount / numberPerPage);
        const paginationButtons = [];

        for (let i = 1; i <= pagesNumber; i++) {
            paginationButtons.push(
              <li className='pagination__item'>
                <button className='pagination__button' type="button">{i}</button>
              </li>
            );
        }
        return paginationButtons;
    };

  return (
    <section className='planets-section'>
      <h1>Planets</h1>
      <table className='planets-section__table planets-table'>
        <tr className='planets-table__row'>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
        </tr>
        {renderInfoPlanets(planets)}
      </table>
      <ul className='planets-section__pagination pagination'>
        {renderPaginationButton(planetsCount, 1)}
      </ul>
    </section>
  );
}

export default App;
