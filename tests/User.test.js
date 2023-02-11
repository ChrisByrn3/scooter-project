const User = require('../src/User')

// User tests here
describe('user properties tests', () => {
  
    const user = new User("Chris", "123Password", 40, true);
  
    test('instance properties', () => {
      expect(user).toHaveProperty("username");
      expect(user).toHaveProperty("password");
      expect(user).toHaveProperty("age");
      expect(typeof user.loggedIn).toBe("boolean")
    }
  )
  }
  )

  describe('user method checks', () => {

    test('login method test', () => {
expect(login(user).user.loggedIn).toBe(true)
    })

    test('logout method test', () => {
        expect(logout(user).user.loggedIn).toBe(false)
            })
  })

// test logout
