
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar brand="DeveloperStore" icon="bi bi-bag"/>
      <ItemListContainer greeting="Estos son nuestros productos"/>
    </>
  );
}

export default App;
