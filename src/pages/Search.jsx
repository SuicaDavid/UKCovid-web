import React, {Component} from 'react'
import ApiManagement from "../api/ApiManagement"
import searchIcon from "../assets/search.png"
import searchIcon2 from "../assets/search_2.png"
import './Search.scss'

export default class Search extends Component {

    state = {
        isSearching: false
    }
    constructor() {
        super();
        this.onClickSearchInput = this.onClickSearchInput.bind(this)
    }

    onClickSearchInput(e) {
        console.log(e.target.className)
        this.setState({isSearching: !this.state.isSearching})
    }
    render() {
        return (
            <div className="search-view">
                <div className={`${this.state.isSearching ? 'search-input-view-selected' : 'search-input-view'}`} onClick={this.onClickSearchInput}>
                    <div className={`search-input-container`}>
                        <input type="text" placeholder="Input your city" className="search-input-text" disabled={!this.state.isSearching}/>
                        <img src={searchIcon} alt="search icon" className="search-icon"/>
                    </div>
                </div>
                <div className="search-current-city-view">
                    <h2 className="search-current-city-name">London</h2>
                    <div className="search-current-city-cases">
                        <div className="search-current-city-today-cases">
                            <h4>cases today</h4>
                            <h3>1000</h3>
                        </div>
                        <div className="search-current-city-total-cases">
                            <h4>cases total</h4>
                            <h3>10000</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}