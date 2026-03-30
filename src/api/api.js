// src/api/api.js

const users = [
    {
        id: 1,
        username: "admin",
        password: "123456",
        role: "Admin",
        name: "Admin User"
    }
];

// Mock Login API
export const loginApi = (username, password) => {
    console.log(username);
    console.log(password);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                resolve({
                    success: true,
                    data: user,
                    token: "mock-jwt-token-123"
                });
            } else {
                reject({
                    success: false,
                    message: "Invalid username or password"
                });
            }
        }, 1000); // simulate network delay
    });
};