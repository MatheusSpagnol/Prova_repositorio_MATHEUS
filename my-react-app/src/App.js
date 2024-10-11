import logo from './logo.svg';
import './App.css';

import Login from './Components/Longin'
import PagCadastroProduto from './Components/PagCadastroProduto'
import PagProduto from './Components/PagProduto'

import NavBar from "./Components/NavBar.jsx"
import { BrowserRouter, Route, Routes} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      < Login />
      {/* < PagCadastroProduto /> */}
      {/* < PagProduto /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/PagCadastroProduto' element={<PagCadastroProduto/>} />         
          <Route path='/PagProduto' element={< PagProduto/>} />
       
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
