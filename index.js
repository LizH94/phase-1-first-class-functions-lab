// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0 , 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier (multiplier){
    return function (fare){
       return fare * multiplier
    }

}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare * 3
}

function selectDifferentDrivers(drivers, driverFunction){
        return driverFunction(drivers)

}