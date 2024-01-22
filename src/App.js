import "./App.css";
import Card from "./Components/Card";
//import HouseList from "./Components/HouseList";

function App() {
	return (
		<div className="flex flex-col mt-10 text-center justify-center">
			<h1 className="font-bold text-lg">DESIGN</h1>
			<div >
				<Card name="John" animal="Dog" founder="Mike" gradientFrom={"red"} gradientTo={"yellow"} />
			</div>
		</div>
	);
}

export default App;
