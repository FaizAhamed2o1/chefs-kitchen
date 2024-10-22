import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurRecipes from "./components/OurRecipes/OurRecipes";

function App() {
  return (
    <>
      <div className="max-w-[1352px] mx-auto px-4">
        <Navbar></Navbar>

        <Hero></Hero>

        <OurRecipes></OurRecipes>
      </div>
    </>
  );
}

export default App;
