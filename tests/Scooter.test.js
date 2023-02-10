const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter properties tests', () => {
  
  const scooter = new Scooter("Mere Lane");

  test('instance properties', () => {
    expect(typeof scooter.user).toBe("string");
    expect(scooter).toHaveProperty("serial");
    expect(scooter).toHaveProperty("charge");
    expect(typeof scooter.isBroken).toBe("Boolean")
    expect(scooter.station).toBe("Mere Lane")
  }
)

test('check nextSerial is incrementing', () => {
 
  const scooter2 = new Scooter("Ash Road");

  expect(scooter2.serial).toBe(scooter.serial +1);
})
})



// Each `Scooter` should have the following methods
// - `rent()`
//     - If the `Scooter` is charged above 20% and not broken, remove it from its station, check it out to user. 
//     - Otherwise, throw an error scooter needs to charge or scooter needs repair.

// - `dock(station)`
//     - Return the scooter to the station. Be sure to clear out the user, so they don’t get charged unfairly!
//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
