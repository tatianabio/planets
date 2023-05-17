import React, { useState } from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import useGetData from './utils/useGetData';
import { IPlanet } from './mock';
import GlobalStyle from './GlobalStyle';
import StyledTitle from './components/Title/StyledTitle';
import StyledPaginationButtons from './components/PaginationButtons/StyledPaginationButtons';
import StyledPlanetsTable from './components/PlanetsTable/StyledPlanetsTable';

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
    <section className={cx('planets-section', className)}>
      <GlobalStyle />
      <h1>Planets</h1>
      <StyledTitle />
      <div className='planets-section__container'>
        <StyledPlanetsTable planetsData={data} />
        {isLoading && <div className='planets-section__loading'><span>Loading...</span></div>}
      </div>
      <div className='planets-section__pagination-wrapper pagination'>
        <button type="button" disabled={isFirstPage} onClick={() => setCurrentPage(currentPage - 1)}>Previous page</button>
        <StyledPaginationButtons totalCount={count} activeNumberButton={currentPage} numberPerPage={numberPerPage} onClick={onClickHandler} />
        <button type="button" disabled={isLastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next page</button>
      </div>

    </section>
  );
}

export default styled(App)``;
