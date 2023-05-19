import React, { useState } from 'react';
import styled from 'styled-components';
import useGetData from './utils/useGetData';
import { IPlanet } from './mock';
import GlobalStyle from './styles/GlobalStyle';
import StyledPlanetsTable from './components/PlanetsTable/StyledPlanetsTable';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';

function App({ className }:{className: string}) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, count, isLoading, numberPerPage } = useGetData<IPlanet>(`${currentPage}`);

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonNumber = (event.target as HTMLButtonElement).textContent;
        setCurrentPage(+buttonNumber);
    };

    const pagesNumber = Math.ceil(count / numberPerPage);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesNumber;

  return (
    <section className={className}>
      <GlobalStyle />
      <h1>Planets</h1>
      <div className='container'>
        <StyledPlanetsTable planetsData={data} />
        {isLoading && <div className='loading'><span>Loading...</span></div>}
      </div>
      <div className='pagination-wrapper'>
        <button type="button" disabled={isFirstPage} onClick={() => setCurrentPage(currentPage - 1)}>Previous page</button>
        <PaginationButtons totalCount={count} activeNumberButton={currentPage} numberPerPage={numberPerPage} onClick={onClickHandler} />
        <button type="button" disabled={isLastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next page</button>
      </div>

    </section>
  );
}

export default styled(App)``;
