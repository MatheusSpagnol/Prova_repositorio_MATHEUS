import React from 'react'
import styles from './Login.css'
import  { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import BarNav from './BarNav'

const PagCadastroProduto = () => {
  const [nomeProduto, setNomeProduto] = useState("")
  const [categoriaProduto, setCategoriaProduto] = useState("")
  const [precoProduto, setPrecoProduto] = useState("")

  const [url] = useState("http://localhost:3000/produtos")
  
  
  const [alertaClass, setAlertaClass] = useState('mb-3 d-none')
  const [alertaMensagem, setAlertaMensagem] = useState('')
 
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    if(!nomeProduto == "" ){
      if(!categoriaProduto == ""){
        if(!precoProduto == ""){
          

          const produto = {nomeProduto, categoriaProduto, precoProduto}
          const res = await fetch(url, {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(produto)

          })
          alert( "Produto cadastrado com sucesso")
          
          setNomeProduto("")
          setCategoriaProduto("")
          setPrecoProduto("")
        }
        else{
          setAlertaClass("mb-3")
          setAlertaMensagem("O preço do produto não pode ser vazio!")
        }
      }
      else{
        setAlertaClass("mb-3")
        setAlertaMensagem("A categirua do produto não pode ser vazia!")
      }   
  }
  else{

      setAlertaClass("mb-3")
      setAlertaMensagem("O nome do produto não pode ser vazio!")
  }
    
}

  return (
      <>
    <BarNav />
      <Container
      className={styles.mainContainer}>
    
        <Alert
        key="danger"
        variant="danger"
        className={alertaClass}
        >
          {alertaMensagem}
        </Alert>

        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit}>


        {/* Nome do produto */}
          <FloatingLabel
            controlId="nomeProdutoInput"
            label="Nome do produto"
            className="mb-3"
            
          >
            <Form.Control
             type="text" 
             placeholder="name@example.com" 
             value={nomeProduto}
              onChange={(e)=>{
                  setNomeProduto(e.target.value)


                  console.log(nomeProduto)
              }} 

              />
          </FloatingLabel>

        {/* Categoria do produto */}
          <FloatingLabel
            controlId="categoriaProdutoInput"
            label="Categoria do produto"
            className="mb-3"
          >
            <Form.Control 
            type="text"
            placeholder="name@example.com" 
            value={categoriaProduto}
              onChange={(e)=>{
                  setCategoriaProduto(e.target.value)


                  console.log(categoriaProduto)
              }} 
            />
          </FloatingLabel>
          
    {/* Preço do produto */}
          <FloatingLabel
            controlId="precoProdutoInput"
            label="Preço do produto"
            className="mb-3"
          >
            <Form.Control 
            type="number" 
            placeholder="name@example.com" 
            value={precoProduto}
              onChange={(e)=>{
                  setPrecoProduto(e.target.value)


                  console.log(precoProduto)
              }} />
          </FloatingLabel>

        {/* BOTÂO CADASTRAR */}

          <Button 
          variant="primary"
          type="submit"
          className={styles.cadastrarBtn}
          
          >Cadastrar</Button>
          
        </form>
        
      </Container>
      </>
    
  )
}

export default PagCadastroProduto;