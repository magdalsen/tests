const ID = 10;
const NAME = "doggie";

export const petShopResponses = {
  get: {
    petById: {
      category: { id: 100, name: "Frankie" },
      id: 100,
      name: "Frankie",
      photoUrls: ["string"],
      status: "available",
      tags: [{ id: 100, name: "Frankie" }]
    }
  },
  post: {
    newPetDataRequest: {
      id: 100,
      category: {
        id: 100,
        name: "Frankie"
      },
      name: "Frankie",
      photoUrls: ["string"],
      tags: [
        {
          id: 100,
          name: "Frankie"
        }
      ],
      status: "available"
    }
  }
};
