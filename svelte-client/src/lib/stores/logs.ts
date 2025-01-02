import { writable } from "svelte/store";
import { getAuthorizationHeader } from "./authentication";
import { PUBLIC_SERVER_URL } from "$env/static/public";

export const logs = writable([]);

export const selectedLog = writable(null);

export function fetchlogs() {
    fetch(`${PUBLIC_SERVER_URL}/workout/`, {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    }).then((response) => response.json()).then(logs.set);
}