import logo from './logo.svg';
import './App.css';

//Importamos componentes
import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlog from './blog/CreateBlog';

//importar router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          {/* Componentes */}
        <Route path='/' element={ <CompShowBlogs />} />
        <Route path='/create' element={ <CompCreateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
