import logo from './logo.svg';
import './App.css';

import Login from './Components/Longin'
import PagCadastroProduto from './Components/PagCadastroProduto'
import PagProduto from './Components/PagProduto'

import BarNav from "./Components/BarNav.jsx"
import { BrowserRouter, Route, Routes} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/> 
          <Route path="/PagProdutos" element={<PagProduto/>}/>
          <Route path="/PagCastro" element={<PagCadastroProduto/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}
export default App;
