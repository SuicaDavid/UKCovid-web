import React, {Component} from 'react'
import './Home.scss'
import DataManagement from "../data/DataManagement"

export default class Home extends Component {

    state = {
        selectedList: 0, // cases 0, death 1
        caseList: [],
        deathList: []
    }


    componentDidMount() {
        this.updateCase()
    }

    updateCase() {
        DataManagement.fetchCityCaseRange()
            .then(() => {
                this.setState({
                    caseList: DataManagement.getCityCaseRange()
                })
            })
    }

    updateDeath() {

    }

    changeList(listIndex) {
        this.setState({selectedList: listIndex})
    }

    getListComponent() {
        let dataList = []
        let listName = ''
        if (this.state.selectedList === 0) {
            dataList = this.state.caseList
            listName = 'Cases'
        } else if (this.state.selectedList === 1) {
            dataList = this.state.deathList
            listName = 'Death'
        }
        console.log(listName)
        return (
            <React.Fragment>
                <h1>Daily {listName}</h1>
                <ul className="case-rank-list">
                    {dataList.map((city, index) => {
                        return (
                            <li className="case-rank-item" key={city.areaCode}>
                                <p className="case-rank-ranking">{index + 1}: </p>
                                <div className="case-rank-data">
                                    <p className="case-rank-name">{city.areaName}</p>
                                    <p className="case-rank-number">{city.newCases}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className="case-rank">
                <div className="select-button-group">
                    <button className={`select-button-left ${this.state.selectedList === 0 && "isSelected"}`}
                            onClick={this.changeList.bind(this, 0)}>Cases
                    </button>
                    <button className={`select-button-right ${this.state.selectedList === 1 && "isSelected"}`}
                            onClick={this.changeList.bind(this, 1)}>Death
                    </button>
                </div>
                {this.getListComponent()}
            </div>
        )
    }
}
