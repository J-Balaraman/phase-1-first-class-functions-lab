const returnFirstTwoDrivers = function (name) {
    name = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return name.slice(0, 2);
}

const returnLastTwoDrivers = function (name) {
    name = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return name.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    const newFare = fare => fare*5
    return newFare;
}

function fareDoubler(fare) {
    return fare*2;
}

function fareTripler(fare) {
    return fare*3;
}

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}
