import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Inicio/Inicio';
import NotFound from './screens/NotFound/NotFound';
import Root from './screens/Root/Root';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Root />} >
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
