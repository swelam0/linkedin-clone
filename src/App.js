import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import HomePage from "./containers/HomePage"
import LoginPage from "./containers/LoginPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>

          <Route path="/home">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
