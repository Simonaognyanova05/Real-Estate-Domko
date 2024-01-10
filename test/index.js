const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://test:g7ubtXdWBCZ1iKxP@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number
})

const Car = mongoose.model('Car', carSchema);


async function createCar(){
    try{
        const car = new Car({
            brand: 'BMW',
            model: 'X6',
            year: 2016
        })
        await car.save();
    }catch(e){
        console.log(e);
    }
}

createCar();
mongoose.connect(dbUrl, connectionParams).then(() => {
    console.log('Connecting to DB')
}).catch((e) => {
    console.log(e);
})