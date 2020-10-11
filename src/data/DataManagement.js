import ApiManagement from "../api/ApiManagement"

class DataManagement {
    ApiManager
    _cityCaseRange = []
    _currentCityData = {}

    constructor() {
        this.ApiManager = new ApiManagement()
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