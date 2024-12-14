import { redirect } from '@sveltejs/kit';

export const authenticationState = {
    isLoggedIn: false,
};

export function checkAuth() {
    if (!authenticationState.isLoggedIn) {
        throw redirect(302, '/login');
    }
}