import test, { expect } from "@playwright/test";
import { petShopResponses } from "../data/pet-shop-responses";
export const ID = 100;
export const NAME = "doggie";

test.describe.parallel("API testing", () => {
  test("Add a new pet to the store", async ({ request }) => {
    const newPet = await request.post(`${process.env.BASE_URL_PETSTORE}/pet`, {
      data: petShopResponses.post.newPetDataRequest
    });
    expect(newPet.ok()).toBeTruthy();
  });

  test("Find pet by ID", async ({ request }) => {
    const dogs = await request.get(`${process.env.BASE_URL_PETSTORE}/pet/${ID}`);
    expect(dogs.status()).toBe(200);
    expect(await dogs.json()).toEqual(
      expect.objectContaining(petShopResponses.get.petById)
    );
  });

  test("Update pet in the store", async ({ request }) => {
    const pet = await request.put(`${process.env.BASE_URL_PETSTORE}/pet`, {
      data: petShopResponses.post.newPetDataRequest
    });
    expect(pet.ok()).toBeTruthy();
  });

  test("DELETE pet", async ({ request }) => {
    const dogs = await request.delete(`${process.env.BASE_URL_PETSTORE}/pet/${ID}`);
    expect(dogs.status()).toBe(200);
  });
});
