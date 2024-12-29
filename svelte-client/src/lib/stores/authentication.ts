import { goto } from '$app/navigation';
import { serverUrl } from '../../env';

export function checkAuth() {
    if (!sessionStorage) {
        goto("/login");
        return;
    }
    const token = sessionStorage.getItem("auth_token");
    if (!token) goto("/login");
}

export function getAuthorizationHeader() {
    const token = sessionStorage.getItem("auth_token");
    return `Bearer ${token}`;
}

export async function attemptLogin(username: string, password: string): Promise<boolean> {
    const response = await fetch(`${serverUrl}/auth/login`, {
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