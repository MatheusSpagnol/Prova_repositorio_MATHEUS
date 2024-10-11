import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Css from '../Components/Login.css';
import { useState, useEffect } from 'react';

import cad from './PagCadastroProduto';
import { Link } from "react-router-dom";

function BasicExample() {

    const [email, SetEmail] = useState('');
    const [senha, SetSenha] = useState('');

  if (email == "admin" && senha == "4321"){
    <Link to="./Components/PagCadastro">página inicial</Link>

  } else{
    
  }


  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      
    </Form>
    <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}

export default BasicExample; 