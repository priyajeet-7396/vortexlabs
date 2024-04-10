import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
const App = () => {
    return (
      <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
    </div>
    <ButtonGradient/>
             <div className="coming">
      <h1 className="title">Coming soon.....</h1>
  
    </div>
      </>
  );
  }

  export default App
