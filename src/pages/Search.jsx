import React, {Component} from 'react'
import ApiManagement from "../api/ApiManagement"
import searchIcon from "../assets/search.png"
import './Search.scss'
import PureLink from "../components/link/PureLink"
import DataManagement from "../data/DataManagement"
import DetailPage from "../components/DetailPage/DetailPage"

export default class Search extends Component {

    state = {
        isSearching: false,
        currentCityData: {
            areaCode: '-- ---',
            areaName: '------',
            cumCases: 0,
            cumDeaths: 0,
            date: new Date('YYYY-MM-SS'),
            newCases: 0,
            newDeaths: 0
        }
    }

    componentDidMount() {
        this.initCurrentCityData()
    }

    async initCurrentCityData() {
        await DataManagement.getLocation()
        await DataManagement.getPostcode(DataManagement._currentPosition)
        await DataManagement.fetchCurrentCityData(DataManagement._currentPostcode)
            .then(() => {
                let data = DataManagement._currentCityData
                if (data && data[0]) {
                    this.setState({
                        currentCityData: data[0]
                    })
                }
            })
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
        const {currentCityData} = this.state
        return (
            <div className="search-view">
                <div className="search-view-row">
                    <div className={`${this.state.isSearching ? 'search-input-view-selected' : 'search-input-view'}`}
                         onClick={this.onClickSearchInput}>
                        <div
                            className={this.state.isSearching ? 'search-input-container-selected' : 'search-input-container'}>
                            <input type="text" placeholder="Input your city" className="search-input-text"
                                   disabled={!this.state.isSearching}/>
                            <img src={searchIcon} alt="search icon" className="search-icon"
                                 onClick={this.onSearch.bind(this)}/>
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
                        <DetailPage
                            cityName={currentCityData.areaName}
                            data={[
                                {
                                    dataName: 'cases today',
                                    figure: currentCityData.newCases
                                },
                                {
                                    dataName: 'cases total',
                                    figure: currentCityData.cumCases
                                },
                                {
                                    dataName: 'deaths today',
                                    figure: currentCityData.newDeaths
                                },
                                {
                                    dataName: 'deaths total',
                                    figure: currentCityData.cumDeaths
                                },
                            ]}
                        />
                    </PureLink>
                </div>
            </div>
        )
    }
}
