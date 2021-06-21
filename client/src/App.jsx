import{
  PostList,
  CardDepoiment,
  Button,
  ContentMobile,
  QuemSomos,
} from './components';

import{
  ContactPage,
  Banner,
  Footer,
  NavBar,
  ContentPage,
} from './pages';

function App() {
  return (
    <>
      <NavBar/> 
      <Banner/>
      <QuemSomos/>
      <ContentPage/>
      <ContactPage/>
      <Footer/> 
    </>
  );
}

export default App;