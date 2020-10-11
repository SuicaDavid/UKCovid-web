import React, {Component} from 'react'
import ApiManagement from "../api/ApiManagement"
import searchIcon from "../assets/search.png"
import searchIcon2 from "../assets/search_2.png"
import './Search.scss'
import {Link} from "react-router-dom"
import PureLink from "../components/link/PureLink"
import postcodeData from "../static/postcode.json"

export default class Search extends Component {

    state = {
        isSearching: false
    }

    constructor() {
        super()
        this.onClickSearchInput = this.onClickSearchInput.bind(this)
        console.log(postcodeData)
    }

    onClickSearchInput(e) {
        e.stopPropagation()
        if (this.state.isSearching && e.target.className === 'search-input-text') {
            return
        }
        this.setState({isSearching: !this.state.isSearching})
    }

    onSearch(e) {
        e.stopPropagation()
        ApiManagement.getCaseByPostcode('W1 111')
            .then(data => {
                console.log('search: ', data)
            })
    }

    render() {
        return (
            <div className="search-view">
                <div className="search-view-row">
                    <div className={`${this.state.isSearching ? 'search-input-view-selected' : 'search-input-view'}`}
                         onClick={this.onClickSearchInput}>
                        <div
                            className={this.state.isSearching ? 'search-input-container-selected' : 'search-input-container'}>
                            <input type="text" placeholder="Input your city" className="search-input-text"
                                   disabled={!this.state.isSearching}/>
                            <img src={searchIcon} alt="search icon" className="search-icon" onClick={this.onSearch.bind(this)}/>
                        </div>
                        {
                            this.state.isSearching ? [].map(item => {
                                return <div>{item}</div>
                            }) : ''
                        }
                    </div>
                </div>
                <div className="search-view-row">
                    <PureLink to={`/cityDetail`}>
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
                    </PureLink>
                </div>
            </div>
        )
    }
}
