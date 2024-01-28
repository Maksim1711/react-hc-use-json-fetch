import FetchBox from './components/FetchBox';
import './App.css';

const url = ' http://localhost:7070/'

function App() {
	return (
		<div className="App">
			<FetchBox url={url} opts='data' />
			<FetchBox url={url} opts='loading' />
			<FetchBox url={url} opts='error' />
		</div>
	);
}

export default App;