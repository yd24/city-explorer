import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <>
    <Stack className='center-items'>
      <Header />
      <Main />
      <Footer />
    </Stack>
    </>
  );
}

export default App;
