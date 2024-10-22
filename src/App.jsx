import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-[1352px] mx-auto px-4">
        <Navbar></Navbar>

        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
