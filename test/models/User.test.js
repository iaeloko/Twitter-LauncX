const User = require ("./../../app/models/User")

describe("Unit test for User class", () => {

    test("Create an user objet", () => {

        const user =new User(1, "iaeloko","Yael","Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("iaeloko")
        expect(user.name).toBe("Yael")
        expect(user.bio).toBe("Bio")

        //test 2
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

        //test3
        expect(user.getUsername).toBe("iaeloko")

    })

    test("Test 4, forma correcta para que se ejecute independiente sin comentar",() => {
        const user =new User(1, "iaeloko","Yael","Bio")
        user.setUsername = "chayo"
        expect(user.username).toBe("chayo")


        })
})