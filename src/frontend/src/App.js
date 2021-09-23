import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import ImgSlider from './components/imgSlider/ImgSlider';


function App() {
  return (
    <div className="App" >    
     <Header/>
     <ImgSlider/>
    </div>
  );
}

export default App;
