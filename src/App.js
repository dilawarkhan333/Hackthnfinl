import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Postadmin from './pages/postadmin';
import Privacy from './pages/privacypolicy';
import About from './pages/about';
import TAC from './pages/TAC';



function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/postuser' element={<Postadmin/>} ></Route>
<Route path='/privacy' element={<Privacy/>}  ></Route>
<Route path='/about' element={<About/>}  ></Route>
<Route path='/tac' element={<TAC/>}  ></Route>

      </Routes>
    </>
  );
}

export default App;