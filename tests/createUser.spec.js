const { test, expect } = require('@playwright/test');

test('Create User API', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Amar',
      job: 'QA'
    }
  });

  expect(response.status()).toBe(201);
});
