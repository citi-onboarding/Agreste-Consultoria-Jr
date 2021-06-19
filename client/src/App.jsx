import {
  PostList,
  CardDepoiment,
  Button,
} from './components';

function App() {
  return (
    <>
      <Button nomeBtn="Nome" imagem='none' buttonTextColor="white" />
      <CardQuemSomos titulo="Missão" imagem={LogoMissao} descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
      <CardDepoiment/>
      <CardDepoiment/>
      <Button nomeBtn="Mais sobre nós" buttonTextColor="#fff"/>    
    </>
  );
}

export default App;
