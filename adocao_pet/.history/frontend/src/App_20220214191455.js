import { BrowserRouter as Router,  Route } from 'react-router-dom'

/* pages */
import Login from './components/pages/Auth'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
    </Router>
  );
}

export default App
