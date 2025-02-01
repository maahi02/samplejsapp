const API_BASE_URL = "http://tst.tryasp.net"; // Replace with your API URL

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_BASE_URL}/token`, {
        method: "POST",
        credentials: "include", // Ensures cookies are sent/received
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
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
