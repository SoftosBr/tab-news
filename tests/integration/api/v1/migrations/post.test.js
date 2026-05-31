import database from "infra/database";

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

beforeAll(cleanDatabase);
test("POST to /api/v1/migrations should return 201", async () => {
  const res1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(res1.status).toBe(201);

  const resBody = await res1.json();
  expect(Array.isArray(resBody)).toBe(true);
  expect(resBody.length).toBeGreaterThan(0);
});

test("POST to /api/v1/migrations should return 200", async () => {
  const res2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(res2.status).toBe(200);

  const resBody = await res2.json();
  expect(Array.isArray(resBody)).toBe(true);
  expect(resBody.length).toBe(0);
});
