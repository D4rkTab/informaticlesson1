const fs = require('fs')
const path = require('path')
const pathToJSON = path.join(__dirname, 'users.json')
function getUsers(){
    return(fs.readFileSync(pathToJSON));
}
function createUser(login, password, email){
    let data = (String(fs.readFileSync(pathToJSON)));
    let newUser = {
        "id": 0,
        "login": login,
        "password": password,
        "email": email,
    };
    if (data == ''){
        const users = [];

        users.push(newUser)
        fs.writeFileSync(pathToJSON, JSON.stringify(users))
    }else{
        data = JSON.parse(data);
        newUser["id"] = data.length;
        data.push(newUser)
        fs.writeFileSync(pathToJSON, JSON.stringify(data));
    }
    return JSON.stringify(newUser);
}
function changeUser(id){
    let data = JSON.parse(String(fs.readFileSync(pathToJSON)));

    return String(search)
}
module.exports = {
    getUsers,
    createUser,
    changeUser
};