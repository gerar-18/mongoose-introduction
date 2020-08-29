require('../connection')

const User = require('../models/User')

const someFunction = async () => {
    const user = await User.findOne({username: 'gera'});
    console.log(user);
    user.password = 'minuevaclave';
    user.save();
}
const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'gera'}, {name:'Gerardo Lopez Reyes'}, {new:true})
    console.log(user);
}

async function updateUsers(){
    const user = await User.update({ username: 'Jessi'}, {
        password: 'clavesegura'
    });
    console,console.log(user);
}
otherFunction();