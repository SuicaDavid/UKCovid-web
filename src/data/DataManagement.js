import ApiManagement from "../api/ApiManagement"

class DataManagement {
    ApiManager
    _cityCaseRange = []
    _currentPosition
    _currentPostcode
    _currentCityData = {}

    constructor() {
        this.ApiManager = new ApiManagement()
    }

    getLocation() {
        return new Promise((resolve,reject)=>{
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
                this._currentPosition = position
                resolve(position)
            }, err => {
                console.log(err)
                reject(err)
            })
        })
    }

    getPostcode(position) {
        return this.ApiManager.getPostcode(position.coords.longitude, position.coords.latitude)
            .then(data => {
                console.log(data)
                if(data && data.result && data.result.length>0) {
                    this._currentPostcode = data.result[0].postcode
                }
            })
    }


    setCityCaseRange(cityRange) {
        this._cityCaseRange = cityRange
    }

    getCityCaseRange() {
        return this._cityCaseRange
    }

    fetchCityCaseRange() {
        return this.ApiManager.getCasesData('new_cases', 15, 1)
            .then(data => {
                console.log(data)
                this.setCityCaseRange(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    setCurrentCityData(currentCityData) {
        this._currentCityData = currentCityData
    }

    getCurrentCityData() {
        return this._currentCityData
    }

    fetchCurrentCityData(postcode) {
        return this.ApiManager.getCaseByPostcode(postcode)
            .then(data => {
                console.log(data)
                this.setCurrentCityData(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default new DataManagement()