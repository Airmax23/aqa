const { CarsController } = require("../../src/controllers/CarsController")


const carsController = new CarsController()

describe ('Check Cars API', ()=>{

    beforeAll(async() =>{
        await carsController.login()   
    })

    afterAll(async() =>{
        const carsResponse = await carsController.getCars()
        const carIds = carsResponse.data.data.map((c) => c.id)
        for (const carId of carIds){
            await carsController.deleteCarById(carId)
        }


    })


    test('User can get all cars', async() =>{
        const carsResponse = await carsController.getCars()
        expect(carsResponse.status).toBe(200)
    })

    test('User can create new car', async() =>{
        let carsResponse = await carsController.getCars()
        const carsList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(1, 1, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carsList.length + 1)
        expect(newCarList.find((c) => c.id === newCarResponse.data.data.id)).toBeDefined()
    })
})
