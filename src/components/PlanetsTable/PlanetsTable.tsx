import React from 'react';
import styled from 'styled-components';
import { IPlanet } from '../../mock';

interface IPlanetsTable {
    planetsData: IPlanet[];
    className: string;
}

const PlanetsTable = ({ planetsData, className }: IPlanetsTable) => {
    const renderInfoPlanets = (infoPlanets: IPlanet[]) => {
        return (
            infoPlanets.map(({ name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter, climate }) => {
                return (
                  <tr className='row' key={name}>
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
      <table className={className}>
        <thead>
          <tr className='row'>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
          </tr>
        </thead>
        <tbody>
          {renderInfoPlanets(planetsData)}
        </tbody>

      </table>
    );
};

export default styled(PlanetsTable)``;
