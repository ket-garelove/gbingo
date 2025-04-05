function bingo() {
    const username = document.querySelector('[name="username"]').value;
    const hash = sha256(username);

    let numbers = [
        "１Ａ","１Ｂ","１Ｃ","１Ｄ",
        "２Ａ","２Ｂ","２Ｃ","２Ｄ",
        "３Ａ","３Ｂ","３Ｃ","３Ｄ",
        "４Ａ","４Ｂ","４Ｃ","４Ｄ",
        "ガＡ","ガＢ","ガＣ","ガＤ",
        "チＡ","チＢ","チＣ","チＤ",
        "ボＡ","ボＢ","ボＣ","ボＤ",
        "ミＡ","ミＢ","ミＣ","ミＤ",
    ];

    let results = [];
    for (let i = 0; i < 24; i++) {
        const n = parseInt(hash.substring(i*2, i*2+2),16) % numbers.length;
        const x = numbers.splice(n, 1);
        results.push(x[0]);

        console.log(document.getElementById(`b${i+1}`).innerHTML);
        document.querySelector('#b'+(i+1)).innerHTML = x[0];
    }

    return false;
}
