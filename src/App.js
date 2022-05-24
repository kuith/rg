import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import {getDataFooter} from './data';
console.log(getDataFooter);
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer data={getDataFooter}/>
    </>
  );
}

export default App;
