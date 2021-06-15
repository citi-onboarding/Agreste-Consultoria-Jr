import {
  PostList, CardQuemSomos,
} from './components';

import LogoMissao from ".\\assets\\logo-missao.png";

function App() {
  return (
    <CardQuemSomos titulo="Missão" imagem={LogoMissao} descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
  );
}

export default App;
