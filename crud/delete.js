require('../connection')
const Product = require('../models/Product')

const someFunction = async () => {
    //const result = await Product.deleteMany({name:'Keyboard'});
    //const result = await Product.deleteOne({name:'laptop hp'});
    //const result = await Product.findOneAndDelete({name:'laptop'});
    const result = await Product.findByIdAndDelete('5f4a9db5a67e761b18c736d9');
    console.log(result);
}
someFunction();