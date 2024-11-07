import { Route,Routes } from 'react-router-dom';
import Home from './layout/Home'
import Main from './layout/Main'
import PercentagePrediction from './layout/PercentagePrediction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/percentage" element={<PercentagePrediction/>}/>
    </Routes>
  );
}

export default App;
