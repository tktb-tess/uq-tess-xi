import { REDIS_URL } from "$env/static/private";
import { json } from "@sveltejs/kit";
import { createClient } from "redis";

export const GET = async () => {
    const redis = await createClient({ url: REDIS_URL }).connect();
    console.log(redis.json.get('today-word'));
    return json(null);
}