const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");

describe("Express App", () => {
  it("Should return a message from GET /", () => {
    return supertest(app).get("/").expect(200, "Hello Express!");
  });
});
