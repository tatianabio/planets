import './App.css';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';

function App() {
  return (
    <section className='planets-section'>
      <h1>Planets</h1>
      <PlanetsTable />
      <div className='planets-section__pagination-wrapper pagination'>
        <button type="button">Previous page</button>
        <PaginationButtons />
        <button type="button">Next page</button>
      </div>

    </section>
  );
}

export default App;
