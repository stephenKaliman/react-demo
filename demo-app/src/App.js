import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Challenges from './pages/Challenges';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/challenges' element={<Challenges />}/>
      </Routes>
    </div>
  );
}

export default App;
