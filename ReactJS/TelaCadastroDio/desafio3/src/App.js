import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Card text="A plataforma para você apender com experts,dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas."/>
      <Form h1Text="Comece agora grátis" pText="Crie sua conta e make the change._" placeholder="Nome completo" pText2="Ao clicar em 'criar minha conta grátis',declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO"/>
    </div>
  );
}

export default App;
