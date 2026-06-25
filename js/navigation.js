// adds the <nav> element
const links = [
    { href: "/index", name: "home" },
    { href: "/rules", name: "rules" },
    { href: "/updates", name: "updates" },
    { href: "/socials", name: "socials" },
    { href: "/cmds", name: "commands" },
    { href: "/devs", name: "devs" },
    { href: "/bans", name: "banlands" }
]
const nav = document.createElement("nav");
links.forEach(link => {
    const navLink = document.createElement("a");
    navLink.className = "nav";
    navLink.href = link.href+".html";
    navLink.innerText = link.name;
    const pageName = `/${location.pathname.split("/").at(-1)}`;
    if (pageName == link.href || pageName == link.href+".html") {
        navLink.setAttribute("disabled", "");
    }
    nav.appendChild(navLink);
});
document.body.prepend(nav);
