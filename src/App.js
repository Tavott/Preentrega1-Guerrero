import './App.css';

import Navbar from './componentes/Header/Navbar';
import Main from './componentes/Main/Main'
import ItemListContainer from './componentes/Main/ItemListContainer';
import Layout from './componentes/Main/Layout';
import Footer from './componentes/Footer/Footer'

// import CartWidget from './componentes/Header/CartWidget';




function App() {
  return (
    <>
      {/* <Header/> */}
      <Navbar/>
      <Main/>
      <ItemListContainer greeting={"Bienvenido!"} placeholder={"Pagina en construccion"}/>
      <Layout/>
      <Footer/>

    </>
  );
}

export default App;
