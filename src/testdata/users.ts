import { faker } from '@faker-js/faker'

export const users = {
  admin: {
    username: "Admin",
    password: "admin123",
  },

  invalid: {
    username: "testuser1",
    password: "testuser1234",
  },

  employee: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toISOString().split('T')[0],
    maritalStatus: "Married",
  }
}