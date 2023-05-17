import './App.css';
import React, { useRef } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import useGetData from './utils/useGetData';
import { IPlanet } from './mock';

function App({ className }:{className:string}) {
    // const [currentPage, setCurrentPage] = useState<number>(1);
    const currentPage = useRef<number>(1);

    const { data, count, isLoading, numberPerPage, getData } = useGetData<IPlanet>();

    const renderData = (currentPageNumber: number) => {
        getData(`${currentPageNumber}`).then();
    };

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonNumber = (event.target as HTMLButtonElement).textContent;
        // setCurrentPage(+buttonNumber);
    };

    // useEffect(() => {
    //     renderData(currentPage);
    // }, [currentPage]);

    const pagesNumber = Math.ceil(count / numberPerPage);

    const isFirstPage = currentPage.current === 1;
    const isLastPage = currentPage.current === pagesNumber;

  return (
    <section className={cx('planets-section', className)}>
      <h1>Planets</h1>
      <div className='planets-section__container'>
        <PlanetsTable planetsData={data} />
        {isLoading && <div className='planets-section__loading'><span>Loading...</span></div>}
      </div>
      <div className='planets-section__pagination-wrapper pagination'>
        <button
          type="button"
          disabled={isFirstPage}
          onClick={() => {
            currentPage.current -= 1;
              getData(`${currentPage.current}`);
        }}
        >
          Previous page
        </button>
        <PaginationButtons totalCount={count} activeNumberButton={1} numberPerPage={numberPerPage} onClick={onClickHandler} />
        <button
          type="button"
          disabled={isLastPage}
          onClick={() => {
            currentPage.current += 1;
              getData(`${currentPage.current}`);
        }}
        >
          Next page
        </button>
      </div>

    </section>
  );
}

export default styled(App)``;
