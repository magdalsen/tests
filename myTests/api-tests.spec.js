import test, { expect } from "@playwright/test";
import { petShopResponses } from "../data/pet-shop-responses";
export const ID = 10;
export const NAME = "doggie";

test.describe.parallel("API testing", () => {
  test("Assert GET response status", async ({ request }) => {
    const dogs = await request.get(`${process.env.BASE_URL_PETSTORE}/pet/${ID}`);
    expect(dogs.status()).toBe(200);
  });

  test("Find pet by ID", async ({ request }) => {
    const dogs = await request.get(`${process.env.BASE_URL_PETSTORE}/pet/${ID}`);
    expect(await dogs.json()).toEqual(
      expect.objectContaining(petShopResponses.get.petById)
    );
  });

  test("Add a new pet to the store", async ({ request }) => {
    const newPet = await request.post(`${process.env.BASE_URL_PETSTORE}/pet`, {
      data: petShopResponses.post.newPetDataRequest
    });
    expect(newPet.ok()).toBeTruthy();

    const issues = await request.get(`${process.env.BASE_URL_PETSTORE}/pet/100`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toEqual(
      expect.objectContaining(petShopResponses.post.newPetDataResponse)
    );
  });
});
