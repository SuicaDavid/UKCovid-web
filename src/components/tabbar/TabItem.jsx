import React, {Component} from 'react'
import './Tabbar.scss'

export default class TabItem extends Component {

    static defaultProps = {
        tabClass: '',
        tabEvent: ()=>{},
        tabUrl: '../assets/home.png',
        tabName: 'home'
    }

    render() {
        const {isSelected, tabIcon, tabSelectedIcon} = this.props
        const icon = isSelected? tabSelectedIcon: tabIcon
        return (
            <div className={`tab-item ${this.props.tabClass}`} onClick={this.props.onClick}>
                <div className="tab-item-icon"><img src={icon} alt="tabbar icon"/></div>
                <div className={`tab-item-name ${isSelected && 'tab-item-name-selected'}`}>{this.props.tabName}</div>
            </div>
        )
    }
}

