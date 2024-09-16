
import './login.css';
import './regester.css';
import './Main.css';
import Login from "./component/Login"
import Regester from './component/Regester';
import Main from './component/Main';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}   />

      <Route path='/reg' element={<Regester/>}   />

      <Route path='/home' element={<Main/>}   />

   
    </Routes>
   </Router>
    </div>
  );
}

export default App;
