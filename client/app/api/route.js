export function GET() {
  return new Response("hello gotten", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
