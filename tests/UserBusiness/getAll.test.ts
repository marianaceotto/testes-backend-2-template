import { UserBusiness } from "../../src/business/UserBusiness"
import { USER_ROLES } from "../../src/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("getAll", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar uma lista de users", async () => {
        const result  = await userBusiness.getAll()

        expect(result).toHaveLength(2)
        expect(result).toContainEqual({
            id: "id-mock",
            name: "Normal Mock",
            email: "normal@email.com",
            password: "hash-bananinha",
            createdAt: expect.any(String),
            role: USER_ROLES.NORMAL
        })
    })
})