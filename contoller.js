const fs = require('fs')
const path = require('path')
function getUsers(){
    return(fs.readFileSync(path.join(__dirname, 'users.json')));
}
function createUser(login, password, email){
    let users = [];
    fs.readFileSync(path.join(__dirname, 'users.json'), (err,data) =>{
        if(err){
            return err;
        }
        if(data == ''){
            users.push({
                "id": 0,
                "login": login,
                "password": password,
                "email": email
            });
        }else{
            users = JSON.parse(data);
            users.push({
                "id": users.length,
                "login": login,
                "password": password,
                "email": email
            });
        }
    })
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users))
    return users[users.length-1];
}
function changeUser(user){
    let users = [];
    fs.readFileSync(path.join(__dirname, 'users.json'), (err,data)=>{
        if (err){
            return err;
        }
        users = JSON.parse(data);
    })
}
module.exports = {
    getUsers,
    createUser
};