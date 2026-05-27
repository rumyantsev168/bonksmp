const updTable = document.createElement("table");
fetch("data/updates.json")
.then(obj => obj.json())
.then(res => {
    updTable.innerHTML += `
        <tr>
            <td style="text-align: center"><b>Date</b></td>
            <td style="text-align: center"><b>Category</b></td>
            <td style="text-align: center"><b>Content</b></td>
        </tr>
    `;
    for (let i = res.length-1; i > 0; i--) {
        let item = res[i];
        console.log(item);
        updTable.innerHTML += `
            <tr>
                <td>${item.date ? new Date(item.date).toLocaleString(
                    "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                ) : "-"}</td>
                <td>${item.type ? item.type : "-"}</td>
                <td>${item.content}</td>
            </tr>
        `;
    };
    document.body.appendChild(updTable);
})
.catch(err => {
    console.error("Error while fetching updates list!", err);
    updTable.innerText = "Update list is currently not available :(";
});