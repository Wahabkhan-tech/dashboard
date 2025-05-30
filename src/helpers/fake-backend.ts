import axios from "axios";
import MockAdapter from "axios-mock-adapter";

interface UserData {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

const mock = new MockAdapter(axios);

export function configureFakeBackend() {
  const users: UserData[] = [
    {
      id: 1,
      username: "admin@consultancy.com",
      password: "admin123",
      firstName: "Admin",
      lastName: "User",
      role: "Admin",
      token: "admin-token",
    },
    {
      id: 2,
      username: "consultant@consultancy.com",
      password: "consult123",
      firstName: "Consultant",
      lastName: "User",
      role: "Consultant",
      token: "consultant-token",
    },
    {
      id: 3,
      username: "customer@consultancy.com",
      password: "customer123",
      firstName: "Customer",
      lastName: "User",
      role: "Customer",
      token: "customer-token",
    },
  ];

  mock.onPost("/login/").reply((config) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const params = JSON.parse(config.data);
        const filteredUsers = users.filter(
          (user) => user.username === params.username && user.password === params.password
        );

        if (filteredUsers.length) {
          const user = filteredUsers[0];
          // Use the correct sessionStorage key to match APICore
          sessionStorage.setItem("konrix_user", JSON.stringify(user));
          console.log("User logged in:", user);
          resolve([200, user]);
        } else {
          resolve([401, { message: "Username or password is incorrect" }]);
        }
      }, 1000);
    });
  });

  mock.onPost("/register/").reply((config) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const params = JSON.parse(config.data);
        const [firstName, lastName] = params.fullname.split(" ");
        const newUser: UserData = {
          id: users.length + 1,
          username: params.email,
          password: params.password,
          firstName: firstName || "",
          lastName: lastName || "",
          role: "Customer", // Default role for new users
          token: `user-token-${users.length + 1}`,
        };
        users.push(newUser);
        sessionStorage.setItem("konrix_user", JSON.stringify(newUser));
        console.log("User registered:", newUser);
        resolve([200, newUser]);
      }, 1000);
    });
  });

  mock.onPost("/forgot-password/").reply((config) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const params = JSON.parse(config.data);
        const filteredUsers = users.filter((user) => user.username === params.username);

        if (filteredUsers.length) {
          resolve([200, { message: "We've sent you a link to reset password to your registered email." }]);
        } else {
          resolve([401, { message: "Sorry, we could not find any registered user with entered username" }]);
        }
      }, 1000);
    });
  });
}

if (process.env.NODE_ENV === "development") {
  configureFakeBackend();
}