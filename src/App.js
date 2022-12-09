import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import{ useEffect, useState} from"react";
import axios from "axios";

function App() {
const apiKey ="234f2a9ac55d9467ca6e563c170e62ff"
const [inputCity,setInputCity] =useState("")
const [data, setData]= useState({}) 
 const getWeatherDetails = (cityName) =>{
  if(!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +" &appid=" + apiKey
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
 }

 const handleChangeInput= (e) =>
 {
      console.log("value",e.target.value)
      setInputCity(e.target.value)
 }
 const handleSearch = () =>{ 
  getWeatherDetails(inputCity)

 }


  return (
   <div className="col-md-12">
    <div className="weatherbg">
      <h1 className="heading">Weather App</h1>

       <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" 
        value ={inputCity} onChange={handleChangeInput} />
         <button className="btn  btn-primary" type="button" 
         onClick={handleSearch}>Search</button>
       </div>
    </div>
    {Object.keys(data).length>0 &&
    <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherResultBox">
        <img className="weathericon" src="https://w7.pngwing.com/pngs/1005/263/png-transparent-weather-forecasting-logo-weather-blue-game-cloud-thumbnail.png" />

        <h5 className="weathercity">
          {data?.name}
        </h5>

        <h6 className="weathertemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
      </div>

    </div>
}
   </div> 
  );
}

export default App;
