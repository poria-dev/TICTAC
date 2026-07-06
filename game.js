const btns = document.querySelectorAll("div>button")
const pop = document.getElementById("pop")
const win = new Audio("sound/Win Sound Effect.mp3")
const lose = new Audio("sound/Sad Trombone Wah Wah Wah Fail Sound Effect.mp3")
const img = document.getElementById("img")
const start = new Audio("sound/play Sound Effect.mp3")
const stop = new Audio("sound/Pause Sound Effect.mp3")
console.log(btns);


let ran1 = parseInt(Math.random() * 2)

let move = ""


if (ran1 == 0) {

    alert("user 1 start")
    move = "x"

} else {
    alert("user 2 start")
    move = "o"
}
let num = 9
btns.forEach((val) => {

    val.addEventListener("click", () => {



        val.setAttribute("disabled", "disabled")

        if (val.innerHTML == "") {

            val.innerHTML = move
        }

        if (move == "x") {
            start.play()
            start.currentTime = 0
            move = "o"
        } else {

            stop.play()
            stop.currentTime = 0
            move = "x"
        }



        let winner = ""


        switch (true) {
            case btns[0].innerHTML == btns[1].innerHTML && btns[0].innerHTML == btns[2].innerHTML && btns[0].innerHTML != "": winner = btns[0].innerHTML

                break;
            case btns[3].innerHTML == btns[4].innerHTML && btns[4].innerHTML == btns[5].innerHTML && btns[3].innerHTML != "": winner = btns[3].innerHTML

                break;
            case btns[6].innerHTML == btns[7].innerHTML && btns[7].innerHTML == btns[8].innerHTML && btns[6].innerHTML != "": winner = btns[6].innerHTML

                break;
            case btns[0].innerHTML == btns[3].innerHTML && btns[3].innerHTML == btns[6].innerHTML && btns[0].innerHTML != "": winner = btns[0].innerHTML

                break;
            case btns[1].innerHTML == btns[4].innerHTML && btns[4].innerHTML == btns[7].innerHTML && btns[1].innerHTML != "": winner = btns[1].innerHTML

                break;
            case btns[2].innerHTML == btns[5].innerHTML && btns[5].innerHTML == btns[8].innerHTML && btns[2].innerHTML != "": winner = btns[2].innerHTML

                break;
            case btns[0].innerHTML == btns[4].innerHTML && btns[4].innerHTML == btns[8].innerHTML && btns[0].innerHTML != "": winner = btns[0].innerHTML

                break;
            case btns[2].innerHTML == btns[4].innerHTML && btns[4].innerHTML == btns[6].innerHTML && btns[2].innerHTML != "": winner = btns[2].innerHTML

                break;


        }

        if (winner == "x") {
            win.play()
            win.currentTime = 0
            setTimeout(() => {
                pop.style.scale = "1"
                img.src = "img/x.png"


            }, 700);


        } else if (winner == "o") {
            win.play()
            win.currentTime = 0
            setTimeout(() => {
                pop.style.scale = "1"
                img.src = "img/o.png"
            }, 700);
        } else {

            num--
            console.log(num);

            if (num <= 0) {
                lose.play()
                lose.currentTime = 0
                setTimeout(() => {
                    pop.style.scale = "1"
                    img.src = "img/equal.png"
                }, 700);
            }
        }
        pop.addEventListener("click", () => {
            pop.style.scale = "0"
            location.reload()
        })


    })



})
