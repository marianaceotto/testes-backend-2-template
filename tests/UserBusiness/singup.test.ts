import { UserBusiness } from "../../src/business/UserBusiness"
import { SignupInputDTO } from "../../src/dtos/userDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Retornar o token singup da conta normal", async () => {
        const input: SignupInputDTO = {
            name: "Normal Mock",
            email: "normal@email.com",
            password: "bananinha"
        }
        
        const result = await userBusiness.login(input)
        expect(result).toEqual({token: "token-mock-normal"})
    })

})