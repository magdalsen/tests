import test, { expect } from "@playwright/test";
import { petShopResponses } from "../../../data/pet-shop-responses";
import dotenv from "dotenv";
dotenv.config({});
const ID_find = 10;
const ID_delete = 12;
const url = `${process.env.BASE_URL_PETSTORE}/pet/`;

test.describe.parallel("Integration API tests", () => {
  test("Add a new pet to the store", async ({ request }) => {
    const newPet = await request.post(url, {
      data: petShopResponses.post.newPetDataRequest
    });
    expect(newPet.status()).toBe(200);
  });

  test("Find pet by ID", async ({ request }) => {
    const dogs = await request.get(url + ID_find);
    expect(dogs.status()).toBe(200);
  });

  test("Update pet in the store", async ({ request }) => {
    await request.post(url, {
      data: petShopResponses.put.petToUpdate
    });
    const pet = await request.put(url, {
      data: petShopResponses.put.newPetDataRequest
    });
    expect(pet.status()).toBe(200);
  });

  test("DELETE pet", async ({ request }) => {
    await request.post(url, {
      data: petShopResponses.delete.addToDelete
    });
    const dogs = await request.delete(url + ID_delete);
    expect(dogs.status()).toBe(200);
  });
});
