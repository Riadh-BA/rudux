import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './Components/AddProduct';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import TaskList from './Components/TaskList';
import PanierList from './Components/PanierList';
import UserListapi from './Components/UserListapi';
function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path='/' element={<ProductList />} />
     <Route path='/AddProduct' element={<AddProduct />} />
     <Route path='/panier' element={<PanierList />} />
     <Route path='/Movielist' element={<MovieList />} />
     <Route path='/Addmovie' element={<AddMovie/>} />
     <Route path='/Tasklist' element={<TaskList/>} />

     <Route path='/userapi' element={<UserListapi/>} />
     </Routes>
    </div>
  );
}

export default App;
