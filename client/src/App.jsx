import{
  PostList,
  CardDepoiment,
  Button,
  ContentMobile,
  QuemSomos,
  CardService,
} from './components';

import{
  ContactPage,
  Banner,
  Footer,
  NavBar,
  ContentPage,
  ServicePage,
  Depoimento,
} from './pages';

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <ServicePage/>
      <Depoimento/> 
      <ContentPage/>
      <ContactPage/>
      <Footer/>
    </>
  );
}

export default App;