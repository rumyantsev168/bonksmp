// adds the <nav> element
const pagesFileNames = ["index", "rules", "updates", "socials", "cmds", "devs", "bans"];
const pagesDisplayNames = ["home", "rules", "updates", "socials", "commands", "devs", "banlands"];
let currentLink = "";
let navMenu = "";
pagesFileNames.forEach((name, i) => {
    let pn = document.location.pathname.split("/").at(-1);
    if (name == "index" && pn == "") {
        currentLink = `<button disabled title="You are already here!">Home</button`;
    } else if (pn == name+".html") {
        currentLink = `<button disabled title="You are already here!">${pagesDisplayNames[i]}</button>`;
    } else {
        currentLink = `<a href="${name}.html"><button>${pagesDisplayNames[i]}</button></a>`;
    };
    navMenu = navMenu + currentLink;
});
const navElement = document.createElement("nav");
navElement.innerHTML = navMenu;
document.body.prepend(navElement);
