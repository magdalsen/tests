import test, { expect } from "@playwright/test";
import { petShopResponses } from "../data/pet-shop-responses";
export const ID = 10;

test.describe.parallel("API testing", () => {
  test("Add a new pet to the store", async ({ request }) => {
    const newPet = await request.post(`${process.env.BASE_URL_PETSTORE}/pet`, {
      data: petShopResponses.post.newPetDataRequest
    });
    expect(newPet.ok()).toBeTruthy();
    let addedPet = await newPet.text();
    let petJson = JSON.parse(addedPet);

    const dogs = await request.get(
      `${process.env.BASE_URL_PETSTORE}/pet/${petJson.id}`
    );
    expect(await dogs.json()).toEqual(
      expect.objectContaining({
        id: 11,
        category: { id: 0, name: "Jeremy" },
        name: "dog",
        photoUrls: [],
        tags: [{ id: 0, name: "Nice" }],
        status: "available"
      })
    );
  });

  test("Find pet by ID", async ({ request }) => {
    const dogs = await request.get(`${process.env.BASE_URL_PETSTORE}/pet/${ID}`);
    expect(dogs.status()).toBe(200);
    expect(await dogs.json()).toEqual(
      expect.objectContaining(petShopResponses.get.petById)
    );
  });

  test("Update pet in the store", async ({ request }) => {
    await request.post(`${process.env.BASE_URL_PETSTORE}/pet`, {
      data: petShopResponses.put.petToUpdate
    });

    const pet = await request.put(`${process.env.BASE_URL_PETSTORE}/pet`, {
      data: petShopResponses.put.newPetDataRequest
    });
    expect(pet.ok()).toBeTruthy();
    const petData = await pet.text();
    const parsedPet = JSON.parse(petData);

    const dogs = await request.get(
      `${process.env.BASE_URL_PETSTORE}/pet/${parsedPet.id}`
    );
    expect(await dogs.json()).toEqual(
      expect.objectContaining(petShopResponses.put.updatedPet)
    );
  });

  test("DELETE pet", async ({ request }) => {
    await request.post(`${process.env.BASE_URL_PETSTORE}/pet`, {
      data: petShopResponses.delete.addToDelete
    });

    const dogs = await request.delete(`${process.env.BASE_URL_PETSTORE}/pet/12`);
    expect(dogs.status()).toBe(200);
  });
});
