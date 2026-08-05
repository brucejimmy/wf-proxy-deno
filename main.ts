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

  // oracle.browse.wf 世界状态精简数据（browse.wf 前端实际使用的数据源）
  if (url.pathname === "/oracle/worldState.min.json") {
    try {
      const resp = await fetch("https://oracle.browse.wf/worldState.min.json", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          "Accept": "application/json",
          "Accept-Language": "zh-CN,zh;q=0.9",
          "Referer": "https://browse.wf/live",
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

  // oracle.browse.wf 版本元数据
  if (url.pathname === "/oracle/min") {
    try {
      const resp = await fetch("https://oracle.browse.wf/min", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Referer": "https://browse.wf/live",
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

  // oracle.browse.wf 集团赏金循环（坚守者/科维兽/六人组 轮换信息）
  if (url.pathname === "/oracle/bounty-cycle") {
    try {
      const resp = await fetch("https://oracle.browse.wf/bounty-cycle", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Referer": "https://browse.wf/live",
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

  // oracle.browse.wf 入侵数据
  if (url.pathname === "/oracle/invasions") {
    try {
      const resp = await fetch("https://oracle.browse.wf/invasions", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Referer": "https://browse.wf/live",
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
