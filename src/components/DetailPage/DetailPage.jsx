import React, {Component} from 'react'
import './DetailPage.scss'

export default class DetailPage extends Component {

    static defaultProps = {
        cityName: 'London',
        data: [
            {
                dataName: 'cases today',
                figure: 1000
            },
            {
                dataName: 'cases total',
                figure: 10000
            }
        ]
    }

    getDataComponent(data) {
        return data.map(item=>{
            return (
                <div className="detail-page-view-city-data">
                    <h4>{item.dataName}</h4>
                    <h3>{item.figure}</h3>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="detail-page-view">
                <div className="detail-page-view-container">
                    <h2 className="detail-page-view-city-name">{this.props.cityName}</h2>
                    <div className="detail-page-view-city-cases">
                        {
                            this.getDataComponent(this.props.data)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
