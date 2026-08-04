import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  
  if (url.pathname === "/warframestat/pc") {
    const resp = await fetch("https://api.warframestat.us/pc", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json",
      },
    });
    
    return new Response(resp.body, {
      status: resp.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return new Response(
    JSON.stringify({ usage: "访问 /warframestat/pc" }),
    { headers: { "Content-Type": "application/json" } }
  );
});