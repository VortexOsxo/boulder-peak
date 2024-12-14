import { checkAuth } from '$lib';

export function load() {
	checkAuth();
}