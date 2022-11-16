import { useState } from 'react';
import { ButtonContainer } from '../components/Button/styles';
import Input from '../components/Input';
import ItemRepo from '../ItemRepo';
import gitLogo from './../assets/gitLogo.png'
import {Container} from './styles'
import {api} from '../services/api'


function App() {
  
  const [currentRepo,setCurrentRepo]=useState('')
  const[repos,setRepos]=useState([])

  const handleSearchRepo=async()=>{
    const {data}=await api.get(`repos/${currentRepo}`)
    if(data.id){
      const isExist=repos.find(repo=>repo.id===data.id)
      if(!isExist){
        setRepos(prev=>[...prev,data])
        setCurrentRepo('')
        return  
      }
    }
    alert("Repositório não encontrado")
  }

  const handleRemoveRepo=(id)=>{
    const deleteRepo=repos.filter(id=>id)
    if(deleteRepo){
      repos.splice(deleteRepo.indexOf(id))
      console.log(repos)
    }
  }

  return (
    <>
      <Container>
        <img src={gitLogo} width={72} height={72} alt="github logo"/>
        <Input value={currentRepo} onChange={(e)=>setCurrentRepo(e.target.value)}/>
        <ButtonContainer text="Buscar" onClick={handleSearchRepo}/>
        {repos.map(repo=><ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      </Container>
    </>
  );
}

export default App;
