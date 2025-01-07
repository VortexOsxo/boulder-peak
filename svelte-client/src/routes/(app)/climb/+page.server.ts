import { getRandomDrill } from "$lib/services/climbing-drills";

export function load() {
    let drill = getRandomDrill();
    return { drill };
}