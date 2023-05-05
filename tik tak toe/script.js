let board = document.querySelector('.board');

let player = "x"

for (let i = 0; i < 9; i++) {
    const box = document.createElement('div');
    board.append(box)
    box.style = `
    width:33.3%;
    height:33.3%;
    border:1px solid black;
    font-size:110px;
    text-align: center
`

    box.onclick = () => {
        if (box.innerText === '') {
            box.innerText = player

            if (player === "x") {
                player = 'o'
            }
            else if (player === "o") {
                player = 'x'
            }
        }
        if (gameOver() === true) {
            alert(`Հաղթեց ${player} խաղացողը`)
        }
    }

}


function gameOver() {
    const divs = Array.from(document.querySelectorAll('.board div')).map((val) => val.innerText)

    if (divs[0] === player && divs[1] === player && divs[2] === player) {
        return true
    }
    if (divs[3] === player && divs[4] === player && divs[5] === player) {
        return true
    }
    if (divs[6] === player && divs[7] === player && divs[8] === player) {
        return true
    }
    if (divs[0] === player && divs[3] === player && divs[6] === player) {
        return true
    }
    if (divs[1] === player && divs[4] === player && divs[7] === player) {
        return true
    }
    if (divs[2] === player && divs[5] === player && divs[8] === player) {
        return true
    }
    if (divs[0] === player && divs[4] === player && divs[8] === player) {
        return true
    }
    if (divs[2] === player && divs[4] === player && divs[6] === player) {
        return true
    }
    return false
}














