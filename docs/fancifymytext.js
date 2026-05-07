function bigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

function fancify() {
    let text = document.getElementById("text");

    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy selected!");
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected!");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo() {
    let text = document.getElementById("text");

    let text2 = text.value.toUpperCase();

    let sentences = text2.split(".");

    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");

        if (words.length > 0) {
            words[words.length - 1] += "-MOO";
        }

        sentences[i] = words.join(" ");
    }

    text.value = sentences.join(".");
}