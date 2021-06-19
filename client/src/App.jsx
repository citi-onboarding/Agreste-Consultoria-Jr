import {
  PostList,
  CardDepoiment,
  Button,
  ContentMobile,
} from './components';

import{
  ContentPage,
} from './pages';

import LogoMissao from "../src/assets/logo-missao.png";

function App() {
  return (
    <>
      <ContentMobile />
      <CardDepoiment/>
      <CardDepoiment/>
      <Button nomeBtn="Mais sobre nós" buttonTextColor="#fff"/>    
    </>
  );
}

export default App;
