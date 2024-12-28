import { goto } from '$app/navigation';

export function checkAuth() {
    const token = sessionStorage.getItem("auth_token");
    if (token === null) goto("/login");
}

export function getAuthorizationHeader() {
    const token = sessionStorage.getItem("auth_token");
    return `Bearer ${token}`;
}

export async function attemptLogin(username: string, password: string): Promise<boolean> {
    const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) return false;

    const data = await response.json();
    const token = data.token;

    sessionStorage.setItem("auth_token", token);
    return true;
}