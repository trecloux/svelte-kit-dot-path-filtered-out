import type { EndpointOutput, Request } from "@sveltejs/kit";

export async function get(request: Request): Promise<EndpointOutput> {
  return {
    status: 200,
    body: "Hello World"
  };
}
