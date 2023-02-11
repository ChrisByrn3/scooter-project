class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.login = false;
  }
  login(password){
    if(password === password){
      this.login = true
    } else {
      throw "incorrect password"
    }
  }
  logout(){
    this.login = false
  }
}

module.exports = User
