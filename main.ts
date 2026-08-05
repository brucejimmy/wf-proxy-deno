Deno.serve({ port: 8000 }, async (req) => {
  const url = new URL(req.url);

  // Warframe 国际服数据
  if (url.pathname === "/warframestat/pc") {
    try {
      const resp = await fetch("https://api.warframestat.us/pc", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Accept-Language": "zh-CN,zh;q=0.9",
        },
      });
      const text = await resp.text();
      return new Response(text, {
        status: resp.status,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // wfhub.top 国服世界状态数据
  if (url.pathname === "/wfhub/int/worldState.json") {
    try {
      const resp = await fetch("https://api.wfhub.top/int/worldState.json", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Accept-Language": "zh-CN,zh;q=0.9",
          "Referer": "https://wfhub.top/",
        },
      });
      const text = await resp.text();
      return new Response(text, {
        status: resp.status,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // oracle.browse.wf 世界状态镜像数据
  if (url.pathname === "/oracle/worldState.json") {
    try {
      const resp = await fetch("https://oracle.browse.wf/worldState.json", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Accept-Language": "zh-CN,zh;q=0.9",
        },
      });
      const text = await resp.text();
      return new Response(text, {
        status: resp.status,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return new Response(
    JSON.stringify({
      usage: "可用路径：/warframestat/pc",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
});
