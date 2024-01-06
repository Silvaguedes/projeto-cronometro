

let number = 0
let cron
let h1 = document.querySelector(".numero")

function começar(){

    cron= setInterval(function(){
        number++
        h1.innerHTML = number

    },1000)
}

function parar(){
clearInterval(cron)

}
