function User()  {
    let thisName,
        thisSurname;
    
    this.setName = function (name) {
        thisName = name;
    };
    
    this.setSurname = function (surname) {
        thisSurname = surname;
    };
    
    this.getFullName = function () {
        console.log(thisName, thisSurname);
    }
}

let user = new User();
user.setName('Пётр');
user.setSurname('Петров');
user.getFullName();
console.log(user);