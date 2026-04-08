const bttn = document.querySelector('.btn')
const passwordfeild = document.querySelector('#password')
const length = 8;
const Upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbles = "*#-@$"
const Allchars = Upercase + lowercase +numbers + symbles

function GetPassword(){
    let password = ''
    password += Upercase[Math.floor(Math.random() * Upercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbles[Math.floor(Math.random() * symbles.length)]

    while (length > password.length) {
        password += Allchars[Math.floor(Math.random() * Allchars.length)]
    }
    passwordfeild.value = password
}

bttn.addEventListener('click', GetPassword)

function copyPassword(){
    passwordfeild.select()
    document.execCommand("copy")
}