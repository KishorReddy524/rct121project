 import Hedder from "./containers/Hedder";
 import Hedder1 from "./containers/Hedder1";

    import "./App.css"
   import Routes from "./containers/Routers.js";
   import BasicSlider from "./containers/Home"
 
function App() {
  return (
    // <BasicSlider/>
    <div className="App">
      <Hedder/>
      <Hedder1/>
       <Routes/>
    </div>
  );
}

export default App;
