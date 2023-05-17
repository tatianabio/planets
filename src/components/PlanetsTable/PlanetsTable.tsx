import React from 'react';
import { IPlanet, planets } from '../../mock';
import './PlanetsTable.scss';

const PlanetsTable = () => {
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

    return (
      <table className='planets-table'>
        <thead>
          <tr className='planets-table__row'>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
          </tr>
        </thead>
        <tbody>
          {renderInfoPlanets(planets)}
        </tbody>

      </table>
    );
};

export default PlanetsTable;
