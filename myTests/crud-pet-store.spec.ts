import test, { expect } from "@playwright/test";
import { petShopResponses } from "../data/pet-shop-responses";
const ID_find = 10;
const ID_delete = 12;
const url: string = `${process.env.BASE_URL_PETSTORE}/pet/`;

test.describe.parallel("API testing", () => {
  test("Add a new pet to the store", async ({ request }) => {
    const newPet = await request.post(url, {
      data: petShopResponses.post.newPetDataRequest
    });
    let addedPet = await newPet.text();
    let petJson = JSON.parse(addedPet);

    const dogs = await request.get(url + petJson.id);
    expect(await dogs.json()).toEqual(
      expect.objectContaining(petShopResponses.post.newPetDataResponse)
    );
  });

  test("Find pet by ID", async ({ request }) => {
    const dogs = await request.get(url + ID_find);
    expect(dogs.status()).toBe(200);
    expect(await dogs.json()).toEqual(
      expect.objectContaining(petShopResponses.get.petById)
    );
  });

  test("Update pet in the store", async ({ request }) => {
    await request.post(url, {
      data: petShopResponses.put.petToUpdate
    });

    const pet = await request.put(url, {
      data: petShopResponses.put.newPetDataRequest
    });
    expect(pet.ok()).toBeTruthy();
    const petData = await pet.text();
    const parsedPet = JSON.parse(petData);

    const dogs = await request.get(url + parsedPet.id);
    expect(await dogs.json()).toEqual(
      expect.objectContaining(petShopResponses.put.updatedPet)
    );
  });

  test("DELETE pet", async ({ request }) => {
    await request.post(url, {
      data: petShopResponses.delete.addToDelete
    });

    const dogs = await request.delete(url + ID_delete);
    expect(dogs.status()).toBe(200);
  });
});
