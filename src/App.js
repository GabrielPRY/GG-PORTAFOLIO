import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Main from "./components/Inicio";
import Nav from "./components/NavBar";
import Portfolio from "./components/Portafolio";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Work />
      <Portfolio />
      <Form />
      <Footer />
    </>
  );
}

export default App;
