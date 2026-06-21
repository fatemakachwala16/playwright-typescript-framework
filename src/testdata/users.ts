import { faker } from "@faker-js/faker";

const _firstName = faker.person.firstName();
const _lastName = faker.person.lastName();
const _dateOfBirth = faker.date
  .birthdate({ min: 18, max: 60, mode: "age" })
  .toISOString()
  .split("T")[0];
const password = faker.internet.password({
  length: 12,
  memorable: false,
});

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
    firstName: _firstName,
    lastName: _lastName,
    dateOfBirth: _dateOfBirth,
    employeeID: faker.number.int({
      min: 1000,
      max: 9999,
    }),
    maritalStatus: "Married",
    username: `${_firstName}${_lastName}`
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase(),
    password: password,
    confirmPassword: password,
  },
};
