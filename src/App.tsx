import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import GlobalStyle from './styles/GlobalStyle';
import getPlanetsData from './utils/apiFunctions';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';

function App({ className }:{className: string}) {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { data, isLoading } = useQuery(['planets', currentPage], () => getPlanetsData(`${currentPage}`), { keepPreviousData: true, refetchOnWindowFocus: false });

    const planetsData = data?.results || [];
    const count = data?.count;
    const numberPerPage = planetsData?.length || 1;

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
        <PlanetsTable planetsData={planetsData} />
        {isLoading && <div className='loading'><span>Loading...</span></div>}
      </div>
      <div className='pagination-wrapper'>
        <button type="button" disabled={isFirstPage} onClick={() => setCurrentPage(currentPage - 1)}>Previous page</button>
        {
              count &&
              <PaginationButtons totalCount={count} activeNumberButton={currentPage} numberPerPage={numberPerPage} onClick={onClickHandler} />
          }
        <button type="button" disabled={isLastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next page</button>
      </div>

    </section>
  );
}

export default styled(App)``;
