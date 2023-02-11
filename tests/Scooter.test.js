const Scooter = require('../src/Scooter')
const User = require('../src/User')


//typeof scooter === object
describe('scooter properties tests', () => {
  
  const scooter = new Scooter("Mere Lane", "Chris", 100, false);

  test('instance properties', () => {
    expect(typeof scooter.user).toBe("string");
    expect(scooter).toHaveProperty("serial");
    expect(scooter).toHaveProperty("charge");
    expect(typeof scooter.isBroken).toBe("boolean")
    expect(scooter.station).toBe("Mere Lane")
  }
)
}
)

test('check nextSerial is incrementing', () => {
  const scooter = new Scooter()
  const scooter2 = new Scooter();

  expect(scooter2.serial).toBe(scooter.serial +1);
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

  // const scooter3 = new Scooter("Tricket Lane");
  const scooter4 = new Scooter("Blake Lane");
  const scooter5 = new Scooter("Moss Lane", "Chris", 100, false);
  const scooter6 = new Scooter("");

 test('check rent charge error', () => {
  const scooter3 = new Scooter("Tricket Lane");
  scooter3.charge = 19;
  scooter3.rent()
  expect(scooter3.rent()).toThrow("Scooter needs to charge");
}
)
test("check rent isBroken error", () => {
  scooter4.isBroken = true
  scooter4.rent()
  expect(scooter4.rent).toThrow("Scooter needs repair")
})
test("check rent check out", () => {
// scooter5.isBroken = false
// scooter5.charge = 100
const scooter5 = new Scooter("Moss Lane", "Chris", 100, false);
scooter5.rent()
expect(scooter5.user).toBe(User)
expect(scooter5.station).toBe(null)
}
)
  //rent method
test("check dock scooter returned to station", () => {
  scooter6.dock("Mere Lane");
  expect(scooter6.station).toBe("Mere Lane")
  expect(scooter6.user).toBe(null)
})
  //dock method
  //requestRepair method

  //charge method

})
