import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
// impopt use hytory para acesar outras paginas
//import logo from './logo.svg';
//import './App.css';
//Isso é um JSX um html dentro do js
function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const[erro, setErro ] = useState(false);
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const  repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories')
    })
    .catch(err => {
      setErro(true);
    });
  }
  
  return (
    //fragment é uma tag sem nada, className é igual class no html
    // dentro do React é tudo componentes com propriedades
    // props é propriedades atraves dela se puxa uma propriedade do index.js como titlie
    // tambem pode ser colocada na mesma linha
    <S.HomeContainer>
      <h1>Pesquise os Repositorios no github pelo usuario</h1>
      <S.Content> 
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa} >Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErroMsg>Ocorreu um erro, tente novamente</S.ErroMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;