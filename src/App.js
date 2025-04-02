import logo from './logo.svg';
import './App.css';
import Book from './Components/Book';
import Search from './Components/Search';
import Booklist from './Components/Booklist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Book/>}/>
       <Route path='/Search' element={<Search/>}/>
       <Route path='/View' element={<Booklist/>}/>
     </Routes>
     </BrowserRouter>
     


    </div>
  );
}

export default App;
