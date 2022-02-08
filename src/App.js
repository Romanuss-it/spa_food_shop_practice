import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { NotFound } from "./pages/NotFound"
import { Category } from "./pages/Category"
import { Recipe } from "./pages/Recipe"

function App() {
  return (
    <>
      <Router basename="/spa_food_shop_practice">
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:idMeal" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
