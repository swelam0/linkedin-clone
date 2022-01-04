import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./components/login"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route excat path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
