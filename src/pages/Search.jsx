import React, {Component} from 'react'
import ApiManagement from "../api/ApiManagement"
import searchIcon from "../assets/search.png"
import searchIcon2 from "../assets/search_2.png"
import './Search.scss'

export default class Search extends Component {


    render() {
        return (
            <div className="search-view">
                <div className="search-button-view">
                    <div className="search-button-text">
                        Input your city
                    </div>
                    <img src={searchIcon} alt="search icon" className="search-icon"/>
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
