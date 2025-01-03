import { PUBLIC_SERVER_URL } from "$env/static/public";

export async function getRandomClimbingDrill() {
    const response = await fetch(`${PUBLIC_SERVER_URL}/climbing-drill/random`);
    return await response.json();
}