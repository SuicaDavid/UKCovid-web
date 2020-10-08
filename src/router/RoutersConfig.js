import Home from "../pages/Home"
import CityDetail from "../pages/CityDetail"
import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"
import Tabbar from "../components/tabbar/Tabbar"

export default class RoutersConfig extends Component{

    routes = [
        {
            path: '/',
            component: Home
        },
        {
            path: '/cityDetail',
            component: CityDetail
        }
    ]

    getRoute() {
        return this.routes.map(route=>{
            if (route.path==='/') {
                return (
                    <Route exact path='/'>
                        <Tabbar pages={route.component}/>
                    </Route>
                )
            } else  {
                return (
                    <Route exact path={route.path}>
                        <Tabbar pages={route.component}/>
                    </Route>
                )
            }
        })
    }
    render() {
        return (
            <Switch>
                {this.getRoute()}
            </Switch>
        )
    }
}