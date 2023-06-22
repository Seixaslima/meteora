import './App.css';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/">
        <Route index element={<div>Olá mundo</div>} />
      </Route>
    </Router>
  );
}

export default App;
