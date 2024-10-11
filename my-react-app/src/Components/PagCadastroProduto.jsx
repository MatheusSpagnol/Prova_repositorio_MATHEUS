import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";


import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import css from "./world.css"


import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/produtos";
const PagCadastro = () => {
  // variaveis pro usuario
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  

  // variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Cliquei");
    if (!nome == "") {
      if (!categoria == "") 
        {
    
          console.log("entrei");
          const produto = { nome, categoria, preco };
          const res = await fetch(url, {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto),

          });

          alert("Usuário cadastrado com sucesso");
          setNome("");
          setCategoria("");
          setPreco("");

          navigate("/login");
        } else {
          setAlertaClass("mb-3");
          setAlertaMensagem("O campo Categoria não pode ser vazio");
        }
      } else {
        setAlertaClass("mb-3");
        setAlertaMensagem("O campo nome não pode ser vazio");
      }
    
  };

  return (
    <div>
      <Container>
        
        <form onSubmit={handleSubmit}>
          {/* caixinha do nome */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha do preço */}
          <FloatingLabel
            controlId="floatingInputpreco"
            label="preco"
            className="mb-3"
          >
            <Form.Control
              type="preco"
              placeholder="00,0R$"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha da Categoria */}
          <FloatingLabel
            controlId="floatingcategoria"
            label="categoria"
            className="mb-3"
          >
            <Form.Control
              type="categoria"
              placeholder="categoria"
              value={categoria}
              onChange={(e) => {
              setCategoria(e.target.value);
              }}
            />
          </FloatingLabel>

         
          

          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </form>
       
      </Container>
    </div>
  );
};

export default PagCadastro;
