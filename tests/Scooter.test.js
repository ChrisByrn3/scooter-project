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

  const scooter3 = new Scooter("Tricket Lane")
  const scooter4 = new Scooter("Blake Lane")
  const scooter5 = new Scooter("Moss Lane")

test("check rent charge error", () => {
  scooter3.charge = 19;
  Scooter.rent(scooter3)
  expect(Scooter.rent).toThrow("Scooter needs to charge");
}
)
test("check rent isBroken error", () => {
  scooter4.isBroken = true
  Scooter.rent(scooter4)
  expect(Scooter).toThrow("Scooter needs repair")
})
test("check rent check out", () => {
scooter5.isBroken = false
scooter5.charge = 100
Scooter.rent(scooter5)
expect(scooter5.user).toBe(User)
expect(scooter5.station).toBe(null)
}
)
  //rent method

  //dock method

  //requestRepair method

  //charge method

})
