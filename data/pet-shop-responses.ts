export const petShopResponses = {
  get: {
    petById: {
      category: { id: 10, name: "string" },
      id: 10,
      name: "doggie",
      photoUrls: ["string"],
      status: "string",
      tags: [{ id: 10, name: "string" }]
    }
  },
  post: {
    newPetDataRequest: {
      category: { id: 0, name: "Jeremy" },
      id: 11,
      name: "dog",
      photoUrls: [],
      status: "available",
      tags: [{ id: 0, name: "Nice" }]
    }
  },
  put: {
    petToUpdate: {
      category: { id: 0, name: "Julia" },
      id: 15,
      name: "elepfant",
      photoUrls: [],
      status: "available",
      tags: [{ id: 0, name: "Big" }]
    },
    newPetDataRequest: {
      id: 15,
      category: {
        id: 15,
        name: "JuliaUpd"
      },
      name: "JuliaUpd",
      photoUrls: ["string"],
      tags: [
        {
          id: 15,
          name: "JuliaUpd"
        }
      ],
      status: "available"
    },
    updatedPet: {
      category: { id: 15, name: "JuliaUpd" },
      id: 15,
      name: "JuliaUpd",
      photoUrls: ["string"],
      status: "available",
      tags: [{ id: 15, name: "JuliaUpd" }]
    }
  },
  delete: {
    addToDelete: {
      category: { id: 0, name: "Ax" },
      id: 12,
      name: "bird",
      photoUrls: [],
      status: "available",
      tags: [{ id: 0, name: "Colorful" }]
    }
  }
};
