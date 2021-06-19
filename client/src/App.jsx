import{
  PostList,
  CardDepoiment,
  Button,
} from './components';

import{
  ContactPage,
} from './pages';

function App() {
  return (
    <>
      <ContactPage />
      <CardDepoiment/>
      <CardDepoiment/>
      <Button nomeBtn="Mais sobre nós" buttonTextColor="#fff"/>    
    </>
  );
}

export default App;
