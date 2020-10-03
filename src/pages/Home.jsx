import React, {Component} from 'react'
import ApiManagement from "../api/ApiManagement"
import './Home.scss'

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
        new ApiManagement().getCasesData('new_cases', 15, 1)
            .then(data => {
                console.log(data)
                this.setState({caseList: data})
            })
            .catch(err=>{
                console.log(err)
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
                                <div className="case-rank-name">{index + 1}: {city.areaName}</div>
                                <div className="case-rank-number">New Case: {city.newCasesByPublishDate}</div>
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
