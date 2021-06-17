import {
  PostList, 
  CardQuemSomos,
  Button,
} from './components';

import LogoMissao from "../src/assets/logo-missao.png";

function App() {
  return (
    <CardQuemSomos titulo="Missão" imagem={LogoMissao} descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
    <Button nomeBtn="Já volto" imagem='none' buttonTextColor="white" />
  );
}

export default App;
