const blogs = [
    {
  id: "3",
  title: "What I Learned This Week: From Web3 to Modern Web Architecture",
  slug: "weekly-learnings-web3",
  category: "tech",
  excerpt: "This past week has been a whirlwind of technical learning—from understanding decentralized exchanges and trading fees to diving into React and Next.js.",
  date: "2025-07-03",
  content: `
## Web3: Making Sense of the Crypto Jungle

This week, I dove headfirst into the world of Web3. It's wild, chaotic, but also incredibly fascinating. Here are some of the key things I learned:

- **Centralized vs Decentralized Exchanges (CEX vs DEX)**: I now understand how they operate differently, including concepts like **custodial risk**, **order books**, and **fees**.
- **Order Types**: Market order vs Limit order—simple terms, but very different implications depending on volatility and slippage.
- **Liquidity and Depth**: These define how stable an exchange is for larger trades. Shallow depth = more price impact.
- **Slippage**: That annoying little hidden cost you notice only when it's already too late 😅.
- **Cold vs Hot Wallets**: Cold wallets = offline & safer. Hot wallets = online & faster, but also riskier.

Even if I’m not trading yet, it feels empowering to understand the backbone of Web3 infrastructure.

---

## React Query vs React.use

I’ve always relied on \`useState\` + \`useEffect\` to fetch data, but **React Query** changes the game. Here’s how:

- It handles caching, loading, error, and refetching automatically.
- Works great with APIs, especially in apps where you’re reading remote data often.
- Less boilerplate than writing \`fetch\`, setting state, handling loading manually.

Pairing this with **tRPC** was an eye-opener. I don’t have to manually write API routes with \`fetch\`—just define procedures and call them directly.

Also got more comfortable with React's experimental \`use()\` function—very cool for reading async resources in server components.

---

## Next.js + TailwindCSS Deep Dive

- **Server Actions**: I explored this new way of handling mutations *on the server*, securely and without needing client-side API calls.
- **Next.js API routes vs tRPC**: Understanding when and why to use each helped me rethink my fullstack flow.
- **TailwindCSS \`data-*\` Attributes**: These let you style components conditionally based on data state, without adding extra JS or class toggling. Clean and powerful!

---

## Takeaway

Honestly, the amount of learning I crammed into one week surprised me. I’m starting to feel more confident navigating between frontend and backend concerns, and understanding what’s happening under the hood—whether it’s a React hook or a crypto exchange protocol.

These aren’t just “buzzwords” anymore—they’re starting to click.

I’m building things with more intention now.`
},
    {
        id: "2",
        title: "A Meetup, A Mindset Shift",
        slug: "meetup-mindset-shift",
        category: "reflection",
        excerpt: "Met new people, had real conversations, and showed up as a confident version of myself. But it also reminded me how different I feel when I'm alone.",
        date: "2025-06-15",
        content: `## The Meetup
      
Today I went to a tech meetup. I wasn’t sure what to expect, but it turned out to be a really good experience. I met a bunch of people—including a CTO—and had some surprisingly deep conversations. Even though his company isn’t hiring juniors, just talking to someone in that position felt encouraging.
      
Multiple people told me I seemed confident and outgoing. That meant a lot to hear, because it didn’t always feel that way internally. I think I’m learning to “show up” better in public—even when I still have doubts or insecurities in private.
      
It felt like I was being two versions of myself: one that connects with people, laughs, shares; and another that goes home and sinks into quiet overthinking. Maybe both are real. I’m just learning how to hold space for both.
      
Sometimes it’s not about walking away with a job or a contact. Sometimes it’s just about proving to yourself that you can be part of the conversation.
      
And today, I was.`
    },
    {
        id: "1",
        title: "Why I Built This Website",
        slug: "why-this-website",
        category: "reflection",
        excerpt: "This wasn’t just about making a portfolio—it was a mix of curiosity, frustration, and a strong urge to just make something of my own.",
        date: "2025-06-08",
        content: `## So... why this website?
      
Honestly? I was tired of feeling like I didn’t *have* something of my own online. A CV is flat. LinkedIn is performative. GitHub is chaotic. I wanted a place that felt like me—a space where I could collect the weird mix of things I’m learning, building, and thinking about.
      
It started with a vague idea: “I should probably have a portfolio.” But as I worked on it, it became something else. I realized I actually *enjoyed* building the site—designing it, tweaking little layout things, adding animations that made me smile.
      
Next.js taught me a lot about how modern web apps *should* be structured. The file-based routing just made sense. Getting SSR/SSG to work was a headache at first, but once I got it, it felt powerful. I used Tailwind CSS for styling because I like how fast I can go from idea to UI. It was messy at first (I resisted it for a long time), but it really clicked during this project. I also got better at thinking in components. Breaking things into small, reusable pieces is satisfying—like Lego, but for interfaces.
      
## The real win
      
More than the tech stuff, I think the best thing this website gave me was *momentum*. I stopped waiting until I was “ready” to build something. I just… started. And I learned a lot in the process—not just about code, but about what kind of developer I want to be.
      
That’s worth a lot.`
    }
];

export default blogs;