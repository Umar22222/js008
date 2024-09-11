const header = document.querySelector(".son")

let offset = 0

function inc(){
    if(offset < 10){
        offset++
    }else if(offset < 100){
        offset += 10
    }else if(offset < 1000){
        offset += 100
    }
    header.innerHTML = offset
}
function dec() {
    if (offset > 100) {
        offset -= 100
    } else if (offset > 10) {
        offset -= 10
    } else if (offset > 1) {
        offset--
    } else {
        offset === 0
    }
    header.innerHTML = offset

}