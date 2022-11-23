import './App.css';
import Nabbar from './componentes/NabBar/Nabbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './componentes/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nabbar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemListContainer/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
