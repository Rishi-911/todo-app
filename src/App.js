import "./App.css";
import Title from "./components/Title";
import AddItem from "./components/AddItem";

function App(props) {
  return (
    <div className="form-div">
      <Title />
      <AddItem />
    </div>
  );
}

export default App;
