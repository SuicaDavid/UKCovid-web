import React, {Component} from 'react'
import './App.css'
import Tabbar from './components/tabbar/Tabbar'
import Home from './pages/Home'
import Search from './pages/Search'
import homeIcon from './assets/home.png'
import homeIcon2 from './assets/home_2.png'
import searchIcon from './assets/search.png'
import searchIcon2 from './assets/search_2.png'

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
    render() {
        return (
            <div className="App">
                <Tabbar pages={this.state.pages}/>
            </div>
        )
    }
}

export default App
