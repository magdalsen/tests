import { test } from "@playwright/test"

type LoginData = {
    login: string,
    password: string
}

const loginData = test.extend<LoginData>({
    login: "magdal.sen@gmail.com",
    password: "Haslo@1234"
})

export const loginTest = loginData;