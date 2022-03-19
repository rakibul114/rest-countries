import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
    <Countries></Countries>  
      
    </div>
  );
}






/* function LoadCountries() {
  // step 1: useState
  const [countries, setCountries] = useState([]);

  // step 2: useEffect
  useEffect(() => {
    // step 3: fetch data
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
    .then(data => setCountries(data))
    
  },[])

  return (
    <div>
      <h1>Visiting every country of the world</h1>
      <h3>Available Countries: {countries.length} </h3>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          population={country.population} languages={country.languages }
        ></Country>
      ))}
    </div>
  );
}

function Country(props) {  
  return (
    <div>
      <h2>Name: {props.name} </h2>
      <h4>Population: {props.population} </h4>
      <p>Language: {}</p>
    </div>
  );
} */

export default App;
