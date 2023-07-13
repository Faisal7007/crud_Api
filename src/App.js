
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Update from './components/Update';
import Display from './components/Display';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/display' element={<Display/>}/>

        <Route path='/update' element={<Update/>}/>

      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
