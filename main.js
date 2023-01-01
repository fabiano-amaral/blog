import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Fabiano Amaral",
  author: "Fabiano Amaral",
  avatar: "https://avatars.githubusercontent.com/u/8539582?v=4",
  avatarClass: "rounded-full",
  lang: "pt-BR",
  theme: "light",
  links: [
    { title: "Twitter", url: "https://twitter.com/af_fabs" },
    { title: "GitHub", url: "https://github.com/fabiano-amaral" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/fabiano-af" },
    { title: "Email", url: "mailto:fabiano.af@outlook.com" },
  ],
  background: "#fff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
