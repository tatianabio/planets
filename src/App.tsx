import cx from 'classnames';
import './App.css';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import { planetsCount } from './mock';

function App() {
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
      <PlanetsTable />
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
