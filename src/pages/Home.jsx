import React, {Component} from 'react'
import ApiManagement from "../api/ApiManagement"

export default class Home extends Component {

    state = {

    }

    constructor() {
        super();
        new ApiManagement().getCasesData('new_cases', 10, 1)
            .then(data=>{
                console.log(data)
            })
    }

    render() {
        return (
            <div className="home">
                home
            </div>
        )
    }
}
