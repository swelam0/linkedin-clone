import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from "./containers/LoginPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route excat path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
