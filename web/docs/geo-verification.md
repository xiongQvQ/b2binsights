# GEO/SEO 验证指南(P0-6)

站点已完成的自动化部分:robots.txt、sitemap.xml、canonical、JSON-LD、llms.txt、og-image、预渲染 HTML。
剩下需要**人工在各平台操作**的一次性配置,按顺序做:

## 1. Google Search Console

1. 打开 https://search.google.com/search-console ,添加资源 → 选「网址前缀」→ 输入 `https://b2binsights.io`。
2. 推荐用 **DNS 记录验证**(域名 DNS 就在 Cloudflare,最省事):复制 Google 给的 TXT 记录 → Cloudflare Dashboard → b2binsights.io → DNS → 添加 TXT 记录(`@` 主机)→ 回 GSC 点验证。
   - 也可以用 HTML meta 验证:拿到 `google-site-verification` token 后,填进 `web/index.html` head 里预留的注释位置并重新部署。
3. 验证通过后:**站点地图** → 提交 `https://b2binsights.io/sitemap.xml`。
4. 用「网址检查」逐个请求编入索引:`/`、`/ai-consulting`、`/fde`、`/trade-leads`、`/about`。

## 2. Bing Webmaster Tools

1. 打开 https://www.bing.com/webmasters ,选择「从 Google Search Console 导入」(最快,GSC 已验证则一键同步)。
2. 同样提交 sitemap,Bing 会顺带驱动 DuckDuckGo、Yahoo 索引。
3. 拿到 `msvalidate.01` token 的话,同样填进 `web/index.html` 注释位置(可选)。

## 3. Cloudflare 侧检查(部署后做一次)

```bash
curl -s https://b2binsights.io/robots.txt
curl -s https://b2binsights.io/sitemap.xml
curl -s https://b2binsights.io/llms.txt
curl -s https://b2binsights.io/ai-consulting/ | head -c 400   # 应看到预渲染的正文 HTML
curl -sI https://b2binsights.io/ai-consulting                 # 应 308 到 /ai-consulting/
```

## 4. AI 引擎可抓取性自检(重要,容易被自己人误伤)

**2026-10-23 实测 b2binsights.io 的 Cloudflare zone 级策略现状:**

| UA | 分类 | 状态 |
|---|---|---|
| Googlebot | 搜索 | ✅ 200 |
| OAI-SearchBot(ChatGPT 搜索引用) | AI Search | ✅ 200 |
| PerplexityBot | AI Search | ✅ 200 |
| GPTBot(OpenAI 训练语料) | AI Training | ❌ 403 |
| ClaudeBot(Anthropic 训练语料) | AI Training | ❌ 403 |

即:**决定「被 AI 搜索引用」的 Search 类已放行;被挡的只是训练语料类**。GEO 的主要通道(Search 引用)不受影响。如果希望品牌进入 GPT/Claude 的训练语料(长期影响模型"记忆里的你"),去:

1. Cloudflare Dashboard → b2binsights.io → **Security Settings → Configure AI bot policies**:Search 类保持 Allow(当前已是);Training / Agent 类按意愿改为 Allow。
2. 检查是否开启 **managed robots.txt / Bot Preference Sync**(会向 robots.txt 注入 `# BEGIN Cloudflare Managed content` 段)。部署后 `curl -s https://b2binsights.io/robots.txt` 确认没有注入段。
3. 「Bot Fight Mode」同样可能挡 AI 爬虫,注意别开。
4. 这些设置只在自定义域名(b2binsights.io)的 zone 里生效,`*.pages.dev` 管不了。

验证命令(应返回 200):
```bash
curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0 (compatible; GPTBot/1.4; +https://openai.com/gptbot)" https://b2binsights.io/
```

时效性事实(2026-10):ChatGPT 搜索引用走 **OAI-SearchBot**(与 GPTBot 是独立开关);**Google-Extended 不是爬虫**,禁不停都不影响搜索收录与 AI Overviews 引用;FAQPage 富结果已于 2026-05 对所有站点下线(标记仍对 AI 解析无害);所有主流 AI 爬虫均**不执行 JS**(Vercel 实证),所以本站的构建期预渲染是 AI 可见性的硬前提。

## 5. 什么时候算生效

- GSC 收录:通常 2–7 天,新站无外链可能要 2–4 周。
- AI 引擎引用:比搜索收录慢得多(数周至数月),按 `docs/ai-question-bank.md` 的问题库每月测一轮,记录出现与否,不要期待立竿见影。
