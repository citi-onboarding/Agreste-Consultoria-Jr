import{
  PostList,
  CardDepoiment,
  Button,
} from './components';

import{
  ContactPage,
  Banner,
} from './pages';

function App() {
  return (
    <>
      <Banner />
      <ContactPage />
      <CardDepoiment/>
      <CardDepoiment/>
      <Button nomeBtn="Mais sobre nós" buttonTextColor="#fff"/>    
    </>
  );
}

export default App;
