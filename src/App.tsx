import './App.css';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import useGetData from './utils/useGetData';
import { IPlanet } from './mock';

function App() {
    const { data, isLoading } = useGetData<IPlanet>('2');

  return (
    <section className='planets-section'>
      <h1>Planets</h1>
      <div className='planets-section__container'>
        <PlanetsTable planetsData={data} />
        {isLoading && <p className='planets-section__loading'>Loading...</p>}
      </div>
      <div className='planets-section__pagination-wrapper pagination'>
        <button type="button">Previous page</button>
        <PaginationButtons />
        <button type="button">Next page</button>
      </div>

    </section>
  );
}

export default App;
