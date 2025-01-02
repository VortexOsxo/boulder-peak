import { serverUrl } from "../../env";
import { getAuthorizationHeader } from "./authentication";

export async function getTotalWorkouts() {
    const response = await fetch(`${serverUrl}/stats/total-workouts`, {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    });
    return await response.json();
}

export async function getTotalVolume() {
    const response = await fetch(`${serverUrl}/stats/total-volume`, {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    });
    return await response.json();
}