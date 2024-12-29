import { writable } from "svelte/store";
import { getAuthorizationHeader } from "./authentication";
import { serverUrl } from "../../env";

export const logs = writable([]);

export const selectedLog = writable(null);

export function fetchlogs() {
    fetch(`${serverUrl}/workout/`, {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    }).then((response) => response.json()).then(logs.set);
}