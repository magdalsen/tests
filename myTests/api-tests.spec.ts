import test, { expect } from "@playwright/test";
const ID:number = 10;
const NAME:string = "doggie";

test('Should create a dog request', async ({ request }) => {
    const dogs = await request.get(`https://petstore.swagger.io/v2/pet/${ID}`);
    expect(dogs.ok()).toBeTruthy();
    expect(await dogs.json()).toEqual(expect.objectContaining({"category": {"id": 10, "name": "string"}, "id": 10, "name": "doggie", "photoUrls": ["string"], "status": "string", "tags": [{"id": 10, "name": "string"}]}));

  });