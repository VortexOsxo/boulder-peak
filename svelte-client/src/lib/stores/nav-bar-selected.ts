import { page } from "$app/stores";
import { writable } from "svelte/store";

export const navBarSelected = writable("home");

export function initNavBar() {
    page.subscribe((page) => {
        const path = page.url.pathname;
        const parts = path.split('/').filter(Boolean);
        let pathname = parts[0] || '';
        navBarSelected.set(pathname);
    });
}
