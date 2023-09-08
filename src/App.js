import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './Components/AddProduct';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path='/' element={<ProductList />} />
     <Route path='/AddProduct' element={<AddProduct />} />
     <Route path='/Movielist' element={<MovieList />} />
     <Route path='/Addmovie' element={<AddMovie/>} />
     </Routes>
    </div>
  );
}

export default App;
