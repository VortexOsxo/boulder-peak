import { getRandomClimbingDrill } from "$lib/stores/climbing_drills";

export async function load() {
    let drill = await getRandomClimbingDrill();
    return { drill };
}