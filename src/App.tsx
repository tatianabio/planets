import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import useGetData from './utils/useGetData';

function App({ className }:{className: string}) {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { planetsArray, planetsCount, isPlanetDataLoading, numberPerPage, pagesNumber } = useGetData(currentPage);

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonNumber = (event.target as HTMLButtonElement).textContent;
        setCurrentPage(+buttonNumber);
    };

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesNumber;

  return (
    <section className={className}>
      <GlobalStyle />
      <h1>Planets</h1>
      <div className='container'>
        <PlanetsTable planetsData={planetsArray} />
        {isPlanetDataLoading && <div className='loading'><span>Loading...</span></div>}
      </div>
      <div className='pagination-wrapper'>
        <button type="button" disabled={isFirstPage} onClick={() => setCurrentPage(currentPage - 1)}>Previous page</button>
        {
            planetsCount &&
              <PaginationButtons totalCount={planetsCount} activeNumberButton={currentPage} numberPerPage={numberPerPage} onClick={onClickHandler} />
          }
        <button type="button" disabled={isLastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next page</button>
      </div>

    </section>
  );
}

export default styled(App)``;
