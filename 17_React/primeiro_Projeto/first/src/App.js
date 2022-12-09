import Button from "./components/Button";

function App({nome}) {
  return (
    <div className="App"> 
    <h1> Olá {nome}</h1>
    <Button title='entrar'/>
    <Button title='fechar'/>
    <Button title='abrir'/>

    </div>
  );
}

export default App;
