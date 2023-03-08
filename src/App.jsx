
import Header from "./components/Header";
import Footer from "./components/Footer";
import Selecteur from "./components/Selecteur";
import Table from './components/Table'
import React from "react";
import './App.css';

const App = () => {

  const [datas, setDatas] = React.useState([])

  return (
    <div className="App">
      <Header />
      <Selecteur setData={setDatas} />
      <Table data={datas} />
      <Footer />
    </div>
  );
}

export default App;
