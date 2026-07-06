// adds the <nav> element
const links = [
    { href: "index.html", name: "home" },
    { href: "rules.html", name: "rules" },
    { href: "updates.html", name: "updates" },
    { href: "socials.html", name: "socials" },
    { href: "cmds.html", name: "commands" },
    { href: "devs.html", name: "devs" },
    { href: "bans.html", name: "banlands" }
]
const nav = document.createElement("nav");
links.forEach(link => {
    const navLink = document.createElement("a");
    navLink.className = "nav";
    navLink.href = link.href;
    navLink.innerText = link.name;
    const pageName = location.pathname.split("/").at(-1);
    if (pageName == link.href || (link.href == "index" && pageName == "")) {
        navLink.setAttribute("disabled", "");
    }
    nav.appendChild(navLink);
});
document.body.prepend(nav);
