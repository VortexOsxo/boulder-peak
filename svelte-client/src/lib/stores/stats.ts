import { PUBLIC_SERVER_URL } from "$env/static/public";
import { getAuthorizationHeader } from "./authentication";

export async function getTotalWorkouts() {
    const response = await fetch(`${PUBLIC_SERVER_URL}/stats/total-workouts`, {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    });
    return await response.json();
}

export async function getTotalVolume() {
    const response = await fetch(`${PUBLIC_SERVER_URL}/stats/total-volume`, {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    });
    return await response.json();
}