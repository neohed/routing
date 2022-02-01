import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Edit from "./Edit";
import RouteNotFound from './RouteNotFound';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/list"
                    element={<List />}
                />
                <Route
                    path="/edit/:id"
                    element={<Edit />}
                />
                <Route
                    path="*"
                    exact={true}
                    element={<RouteNotFound />}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
