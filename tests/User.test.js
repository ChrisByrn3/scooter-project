const User = require('../src/User')

// User tests here
describe('user properties tests', () => {
  
    const user = new User("Chris", "123Password", 40);
  user.loggedIn = true;

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

    const user = new User();

    test('login method test', () => {
expect(user.login(user).user.loggedIn).toBe(true)
    })

    test('logout method test', () => {
        expect(user.logout(user).user.loggedIn).toBe(false)
            })
  })

// test logout
