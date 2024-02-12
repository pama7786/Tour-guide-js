import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from './component/landingpage';
import SignupForm from './component/sign'; 
import Navbar from './Navbar/Navbar';
import Search from './search/search';
function App() {

  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element= {<LandingPage />}/>
          <Route exact path ="login" element ={<SignupForm />}/>
          <Route exact path = 'guide' element ={<Navbar />}/>
        </Routes>
       </div>
    </>
  )
}

export default App
