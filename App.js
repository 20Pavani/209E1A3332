import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      function App() {
  const [numbers, setNumbers] = useState([]);

  const handleGetNumbers = async () => {
    const urlParams =
      'http://104.211.219.98/numbers/primes&url=http://104.211.219.98/numbers/fibo&url=http://104.211.219.98/numbers/odd';

    try {
      const response = await axios.get(`http://localhost:8008/numbers?url=${urlParams}`);
      const numbers = response.data.numbers || [];
      const sortedNumbers = numbers.sort((a, b) => a - b);
      setNumbers(sortedNumbers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleGetNumbers}>Get Numbers</button>
      {numbers.length > 0 && (
        <div>
          <h2>Expected Output:</h2>
          <pre>{JSON.stringify({ numbers }, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
