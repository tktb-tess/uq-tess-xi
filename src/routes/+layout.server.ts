import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

export const prerender = true;

// Vercel Speed Insights
injectSpeedInsights();
