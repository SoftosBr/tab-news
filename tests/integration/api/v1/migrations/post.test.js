test("POST to /api/v1/migrations should return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(res.status).toBe(200);

  const resBody = await res.json();
  expect(Array.isArray(resBody)).toBe(true);
});
