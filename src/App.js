import React, {Component} from 'react'
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Tabbar from './components/tabbar/Tabbar'
import Home from './pages/Home'
import Search from './pages/Search'
import homeIcon from './assets/home.png'
import homeIcon2 from './assets/home_2.png'
import searchIcon from './assets/search.png'
import searchIcon2 from './assets/search_2.png'
import CityDetail from "./pages/CityDetail"
import DataManagement from "./data/DataManagement"

class App extends Component {
    state = {
        pages: [
            {
                name: 'home',
                icon: homeIcon2,
                selectedIcon: homeIcon,
                page: <Home/>
            },
            {
                name: 'search',
                icon: searchIcon2,
                selectedIcon: searchIcon,
                page: <Search/>
            }
        ]
    }

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path='/'>
                            <Tabbar pages={this.state.pages}/>
                        </Route>
                        <Route path="/cityDetail">
                            <CityDetail/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
