const {UsersController} = require ("../../src/controllers/UserController")

const usersController = new UsersController()

test ('Get current user profile', async()=>{
    await usersController.login()
    const res = await usersController.getUserProfile()
    expect(res.status).toBe(200)
    expect(res.data.data.name).toBe('Air')

})

test('Check users settings', async() =>{
    
}
)