import generateCPF from './functions/generateCPF.js'

import checkCpf from './functions/checkCpf.js'

import twoDigits from './functions/twoDigits.js'

let generate = document.querySelector("#geraCpf")

let check = document.querySelector('#checkCpf')

let geraCpf = document.querySelector('#gera2dig')

generate.addEventListener('click',generateCPF)

check.addEventListener('click',checkCpf)

geraCpf.addEventListener('click', twoDigits)







