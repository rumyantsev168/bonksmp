const siteUpdContainer = document.getElementById("site-updates");
const serverUpdContainer = document.getElementById("server-updates");

fetch("data/server_updates.yml")
.then(obj => obj.text())
.then(data => {
    const parsedServer = jsyaml.loadAll(data.trim().replace(/^(---\n)+|(\n---)+$/g, "")).slice(-10);
    console.log(parsedServer);
    for (let i = 0; i < parsedServer.length; i++) {
        serverUpdContainer.innerHTML += `<p style="opacity: ${i/10 + 0.2}" title="${formatDate(parsedServer[i].date)}">${parsedServer[i].content}</p>`;
    };
})
.catch(err => {
    console.error("Error while fetching updates list!", err);
    serverUpdContainer.innerHTML += "<p>currently not available :(</p>";
});

fetch("data/site_updates.yml")
.then(obj => obj.text())
.then(data => {
    const parsedSite = jsyaml.loadAll(data.trim().replace(/^(---\n)+|(\n---)+$/g, "")).slice(-10);
    console.log(parsedSite);
    for (let i = 0; i < parsedSite.length; i++) {
        siteUpdContainer.innerHTML += `<p style="opacity: ${i/10 + 0.2}" title="${formatDate(parsedSite[i].date)}">${parsedSite[i].content}</p>`;
    };
})
.catch(err => {
    console.error("Error while fetching updates list!", err);
    siteUpdContainer.innerHTML += "<p>currently not available :(</p>";
});

function formatDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    if (isNaN(date)) { console.warn(`Invalid date '${dateStr}'. Expected DD-MM-YYYY format.`) };
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};