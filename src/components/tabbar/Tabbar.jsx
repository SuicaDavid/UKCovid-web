import React, {Component} from 'react'
import './Tabbar.scss'
import TabItem from './TabItem'

export default class Tabbar extends Component {
    static defaultProps = {
        pages: []
    }
    state = {
        currentIndex: 1
    }


    changeTab(index) {
        this.setState({currentIndex: index})
    }

    getPage() {
        return this.props.pages[this.state.currentIndex] ? this.props.pages[this.state.currentIndex].page :
            <div>no page</div>
    }

    getTabbar() {
        return this.props.pages.map((page, index) => {
            return <TabItem key={index}
                            onClick={this.changeTab.bind(this, index)}
                            isSelected={this.state.currentIndex === index}
                            tabIcon={page.icon}
                            tabSelectedIcon={page.selectedIcon}
                            tabName={page.name}
            />
        })
    }

    render() {
        const page = this.getPage()
        const tabbarList = this.getTabbar()
        return (
            <div className="tab-view">
                <div className="tab-page-view">
                    {page}
                </div>
                <div className="tabbar-row">
                    {tabbarList}
                </div>
            </div>
        )
    }
}
