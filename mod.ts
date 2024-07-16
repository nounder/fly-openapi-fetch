import createClient from "npm:openapi-fetch";
import type { paths } from "./specs/machines.ts";

const client = createClient<paths>({
  baseUrl: "https://api.machines.dev/v1",
});

export default client;
