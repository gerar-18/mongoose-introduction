require('./connection')
const User = require('./models/User')
async function createUsers(){
    const userOne = new User({
        username: 'Gera',
        password: '12345' 
    })
    await userOne.save();
    const userTwo = new User({
        username: 'Wendy',
        password: 'pass' 
    })
    await userTwo.save();
}
createUsers();