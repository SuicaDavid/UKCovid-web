import React, {Component} from 'react'
import './CityDetail.scss'
import DetailPage from "../components/DetailPage/DetailPage"
import PureLink from "../components/link/PureLink"

export default class CityDetail extends Component {


    render() {
        return (
            <div className="city-detail-view">
                <header className="city-detail-nav-bar">
                    <PureLink to="/">
                        <div  className="city-detail-nav-back">{"<"}</div>
                    </PureLink>
                    <div  className="city-detail-nav-title">Specific data</div>
                    <div className="city-detail-nav-detail"/>
                </header>
                <DetailPage/>
            </div>
        )
    }
}
