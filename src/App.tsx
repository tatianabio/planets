import cx from 'classnames';
import './App.css';
import { IPlanet, planets } from './mock';

function App() {
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

    const renderPaginationButtons = (totalCount: number, activeNumber: number) => {
        const numberPerPage = 10;
        const pagesNumber = Math.ceil(totalCount / numberPerPage);

        const paginationButtons = new Array(pagesNumber);

        return paginationButtons.map((_, index) => {
            const isActive = activeNumber === index;
            const paginationButtonText = index + 1;
            return (
              <li key={paginationButtonText} className='pagination__item'>
                <button className={cx('pagination__button', isActive && 'pagination__button--active')} type="button">{paginationButtonText}</button>
              </li>
            );
        });
    };

  return (
    <section className='planets-section'>
      <h1>Planets</h1>
      <table className='planets-section__table planets-table'>
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
      <div className='planets-section__pagination-wrapper pagination'>
        <button type="button">Previous page</button>
        <ul className='pagination__buttons'>
          {renderPaginationButtons(planetsCount, 1)}
        </ul>
        <button type="button">Next page</button>
      </div>

    </section>
  );
}

export default App;
