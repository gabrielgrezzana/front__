import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
