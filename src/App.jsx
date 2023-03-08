
import Header from "./components/Header";
import Footer from "./components/Footer";
import Selecteur from "./components/Selecteur";
import Table from './components/Table'
import React from "react";
import './App.css';

const App = () => {

  const [datas, setDatas] = React.useState([])
  const [position, setposition] = React.useState([])

  console.log(position)

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setposition([latitude, longitude])
  }

  function error() {
    console.log("Unable to retrieve your location")
  }

  React.useEffect(() => {
    function getLocalisation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      }
      else {
        throw new Error("le navigateur n'autorise pas la géolocation")
      }
    }
    getLocalisation()
  }, [])

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
