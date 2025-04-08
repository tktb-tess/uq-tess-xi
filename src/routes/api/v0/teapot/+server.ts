import { error } from "@sveltejs/kit"

export const GET = () => {
    error(418, { message: 'I\'m a teapot!' });
}


