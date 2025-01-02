import { goto } from '$app/navigation';
import { PUBLIC_SERVER_URL } from '$env/static/public';

export function checkAuth() {
    const token = sessionStorage.getItem("auth_token");
    if (!token) goto("/login");
}

export function getAuthorizationHeader() {
    const token = sessionStorage.getItem("auth_token");
    return `Bearer ${token}`;
}

export async function attemptLogin(username: string, password: string) {
    const response = await fetch(`${PUBLIC_SERVER_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) return  { success: false, message: data.error };

    const token = data.token;

    sessionStorage.setItem("auth_token", token);
    return { success: true, message: data.error };
}

export async function attemptSignUp(username: string, password: string) {
    const response = await fetch(`${PUBLIC_SERVER_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) return { success: false, message: data.error };

    return { success: true, message: data.error };
}
