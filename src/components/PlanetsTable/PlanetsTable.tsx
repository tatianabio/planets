import React from 'react';
import cx from 'classnames';
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
      <table className={cx('planets-table', className)}>
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
          {renderInfoPlanets(planetsData)}
        </tbody>

      </table>
    );
};

export default styled(PlanetsTable)``;
