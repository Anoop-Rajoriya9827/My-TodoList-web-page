console.log("js is link")
let button = 'none'
let count = 0
let visible = [0, 0, 0, 0, 0, 0]
document.querySelector("#creat").addEventListener("click", creat)
document.querySelector("#btn").addEventListener("click", done)
document.querySelector("#delete").addEventListener("click", delet)
document.querySelector("#view").addEventListener("click", view)




function add_c(e, c) {
    document.querySelector(e).classList.add(c)
}
function rem_c(e, c) {
    document.querySelector(e).classList.remove(c)
}

function creat() {

    if (count < 5) {
        document.querySelector("#title").value = ""
        document.querySelector("#text").value = ""
        add_c('#nav', 'h')
        add_c('#data', 'h')
        rem_c('#inp', 'h')
        button = 'creat'
    }


}

function delet() {

    if (count <= 5) {
        console.log(' delete button is clicked')
        for (let i = 1; i <= 5; i++) {

            if (document.querySelector(`#chackbx${i}`).checked == true) {
                add_c(`#taildiv${i}`, 'v')
                document.querySelector(`#chackbx${i}`).checked = false
                let key = document.querySelector(`#p${i}`).textContent
                localStorage.removeItem(key)
                document.querySelector(`#p${i}`).textContent = ""
                visible[i] = 0
                count--
                i = 6
            }
        }
    }

}


function view() {

    if (count <= 5 && count > 0) {

        for (let i = 1; i <= 5; i++) {

            if (document.querySelector(`#chackbx${i}`).checked == true) {
                console.log("can view")
                add_c('#nav', 'h')
                add_c('#data', 'h')
                rem_c('#inp', 'h')
                button = 'view'
                document.querySelector('#title').value = document.querySelector(`#p${i}`).textContent
                document.querySelector("#text").value = localStorage.getItem(document.querySelector(`#p${i}`).textContent)
                i = 6
            }
        }
    }


}


function done() {
    rem_c('#nav', 'h')
    rem_c('#data', 'h')
    add_c('#inp', 'h')

    if (button === 'creat' && count <= 5) {
        console.log(' creat button is clicked')
        for (let i = 1; i <= 5; i++) {
            if (visible[i] == 0) {
                rem_c(`#taildiv${i}`, 'v')
                count++
                visible[i] = 1
                if (document.querySelector('#title').value != null) {
                    let key = document.querySelector('#title').value
                    let val = document.querySelector('#text').value
                    document.querySelector(`#p${i}`).textContent = key
                    localStorage.setItem(key, val)

                }
                i = 6
            }

        }

    } else if (button === 'view') {
        console.log(' view button is clicked')

    }

    button = 'none'

}

