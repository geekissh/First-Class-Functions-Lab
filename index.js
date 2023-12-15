// Task 1
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Task 2:
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Task 3
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Task 4
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Task 5
  const fareDoubler = createFareMultiplier(2);
  
  // Task 6
  const fareTripler = createFareMultiplier(3);
  
  // Task 7
  const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
  };
  
    const driversArray = ["driver1", "driver2", "driver3", "driver4"];
  
  console.log(returnFirstTwoDrivers(driversArray));
    console.log(returnLastTwoDrivers(driversArray)); 
  console.log(createFareMultiplier(2)(10)); 
  console.log(fareDoubler(10)); 
  console.log(fareTripler(10)); 
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); 
  
