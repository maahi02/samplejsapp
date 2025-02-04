const API_BASE_URL = "https://tst.tryasp.net"; // Replace with your API URL

//const API_BASE_URL = "https://tst.tryasp.net"; // Replace with your API URL
let accessToken = ''; // Store access token here
//let refreshToken = ''; // Store refresh token here

// Login function to get access and refresh tokens
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("username", username);
    params.append("password", password);
    // params.append("client_id", "your-client-id");  // If needed
    // params.append("client_secret", "your-client-secret"); // If needed

    const response = await fetch(`${API_BASE_URL}/Token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
    });

    const data = await response.json();

    if (data.access_token) {
        accessToken = data.access_token; // Store the access token
        refreshToken = data.refresh_token; // Store the refresh token (if available)
        document.getElementById("response").textContent = JSON.stringify(data, null, 2);
    } else {
        document.getElementById("response").textContent = "Login failed!";
    }
}


async function fetchProtectedData() {
    const response = await fetch(`${API_BASE_URL}/protected`, {
        method: "GET",
        credentials: "include", // Ensures cookies are sent
    });

    const data = await response.json();
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}

async function refreshTokenFun() {
    alert('called');
    const response = await fetch(`${API_BASE_URL}/api/Account/refresh-token`, {
        method: "POST",
        credentials: "include", // Ensures cookies are sent
    });

    const data = await response.json();
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}
