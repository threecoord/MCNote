
async function Main() {
        document.body.style.backgroundColor = "black";
        let sNote = "";
        await new Promise((resolve) => {
                const xhr = new XMLHttpRequest();
                xhr.open("get", "./Note.txt", true);
                xhr.send();
                xhr.onreadystatechange = () => {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                                sNote = xhr.responseText;
                                resolve();
                        }
                };
        });
        const asLine = sNote.split('\r\n');
        const nWidthBody = document.body.clientWidth;
        const nWidthWord = nWidthBody / 10;
        const nHeightLine = nWidthWord / 2;
        asLine.forEach(sLine => {
                if (sLine.trim()) {
                        const [sState, sTask] = sLine.split('\t');
                        const eP = document.createElement('p');
                        eP.textContent = sTask;
                        eP.style.fontSize = `${nWidthWord}px`;
                        eP.style.lineHeight = `${nHeightLine}px`;
                        if(sState == "0") {
                                eP.style.color = "#ffff00";
                        } else {
                                eP.style.color = "#00ff00";
                        }
                        document.body.appendChild(eP);
                }
        });
}

await Main();
