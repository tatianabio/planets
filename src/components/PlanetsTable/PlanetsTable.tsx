import React from 'react';
import { IPlanet } from '../../mock';
import StyledTable from '../../styles/StyledTable';

interface IPlanetsTable {
    planetsData: IPlanet[];
}

const PlanetsTable = ({ planetsData }: IPlanetsTable) => {
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
      <StyledTable>
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

      </StyledTable>
    );
};

export default PlanetsTable;
