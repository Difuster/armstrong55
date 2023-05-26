import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Router from './router/Router';
import MyButton from './components/UI/Button/MyButton';

function App() {
  return (
    <>
      <Header />
      <Router />
      <MyButton>Заказать <br /> расчет</MyButton>
      <Footer />
    </>
  );
}

export default App;
