import "./App.css";
import HouseList from "./Components/HouseList";

function App() {
	return (
		<div className="flex flex-col my-10 text-center justify-center">
			<h1 className="font-bold text-lg">DESIGN</h1>
			<div >
				<HouseList />
			</div>
		</div>
	);
}

export default App;
