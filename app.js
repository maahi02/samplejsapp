const API_BASE_URL = "https://tst.tryasp.net"; // Replace with your API URL

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
const grant_type = "password";
    const response = await fetch(`${API_BASE_URL}/token`, {
        method: "POST",
        credentials: "include", // Ensures cookies are sent/received
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, grant_type :"password" }),
    });

    const data = await response.json();
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}

async function fetchProtectedData() {
    const response = await fetch(`${API_BASE_URL}/protected`, {
        method: "GET",
        credentials: "include", // Ensures cookies are sent
    });

    const data = await response.json();
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}

async function refreshToken() {
    const response = await fetch(`${API_BASE_URL}/refresh-token`, {
        method: "POST",
        credentials: "include", // Ensures cookies are sent
    });

    const data = await response.json();
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}
