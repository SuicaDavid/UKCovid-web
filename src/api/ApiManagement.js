import path from '../static/server'
import axios from 'axios'
import CasesApi from "./CasesApi"
import PostcodeApi from "./PostcodeApi"

const SortBy = {
    'newCases': 'new_cases',
    'totalCases': 'cum_cases',
    'newDeaths': 'new_deaths',
    'totalDeaths': 'cum_deaths',
    'areaName': 'area_name',
}

function errorHandler(data) {
    if(data.errors) {
        throw new Error(data.errors.query.sortby[0])
    }
}

export default class ApiManagement {
    async getPostcode(longitude, latitude) {
        let parameter = {longitude, latitude}
        const url = PostcodeApi + convertQueryString(parameter)
        const {data, status, statusText} = await axios.get(url, {timeout: 10000})
        if (status >= 400)
            throw new Error(statusText)
        errorHandler(data)
        return data
    }

    async getCasesData(casesPerPage, numberOfPage, sortBy = SortBy.newCases, order = 1) {
        let parameter = {
            'sortby': sortBy,
            'order': order,
            'numperpage': casesPerPage,
            'pageno': numberOfPage
        }
        const url = path + CasesApi.newCases + convertQueryString(parameter)
        const {data, status, statusText} = await axios.get(url, {timeout: 10000})
        if (status >= 400)
            throw new Error(statusText)
        errorHandler(data)
        return data
    }
    async getDeathsData(casesPerPage, numberOfPage, sortBy = SortBy.newDeaths, order = 1) {
        let parameter = {
            'sortby': sortBy,
            'order': order,
            'numperpage': casesPerPage,
            'pageno': numberOfPage
        }
        const url = path + CasesApi.newCases + convertQueryString(parameter)
        const {data, status, statusText} = await axios.get(url, {timeout: 10000})
        if (status >= 400)
            throw new Error(statusText)
        errorHandler(data)
        return data
    }



    async getCaseByPostcode(postcode) {
        let parameter = {postcode}
        const url = path + CasesApi.searchCase + convertQueryString(parameter)
        const {data, status, statusText} = await axios.get(url, {timeout: 10000})
        if (status >= 400)
            throw new Error(statusText)
        errorHandler(data)
        return data
    }
}

function convertQueryString(parameter) {
    let queryString = '?'
    for (let key in parameter) {
        queryString += `${key}=${parameter[key]}&`
    }
    return queryString.substr(0, queryString.length - 1)
}