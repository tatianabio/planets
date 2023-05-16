import './App.css';
import React, { useEffect, useState } from 'react';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import useGetData from './utils/useGetData';
import { IPlanet } from './mock';

function App() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, count, isLoading, numberPerPage, getData } = useGetData<IPlanet>(`${currentPage}`);

    const renderData = (currentPageNumber: number) => {
        getData(`${currentPageNumber}`).then();
    };

    const onClickHandler = (event: any) => {
        const buttonNumber = event.target.textContent;
        setCurrentPage(+buttonNumber);
    };

    useEffect(() => {
        renderData(currentPage);
    }, [currentPage]);

    const pagesNumber = Math.ceil(count / numberPerPage);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesNumber;

  return (
    <section className='planets-section'>
      <h1>Planets</h1>
      <div className='planets-section__container'>
        <PlanetsTable planetsData={data} />
        {isLoading && <div className='planets-section__loading'><span>Loading...</span></div>}
      </div>
      <div className='planets-section__pagination-wrapper pagination'>
        <button type="button" disabled={isFirstPage} onClick={() => setCurrentPage(currentPage - 1)}>Previous page</button>
        <PaginationButtons totalCount={count} activeNumberButton={currentPage} numberPerPage={numberPerPage} onClick={onClickHandler} />
        <button type="button" disabled={isLastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next page</button>
      </div>

    </section>
  );
}

export default App;
