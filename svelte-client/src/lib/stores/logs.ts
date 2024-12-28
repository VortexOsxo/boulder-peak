import { writable } from "svelte/store";
import { getAuthorizationHeader } from "./authentication";

export const logs = writable([]);

export function fetchlogs() {
    fetch("http://127.0.0.1:5000/workout/", {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    }).then((response) => response.json()).then(logs.set);
}