/* Recebe os dígitos gerados por generateDigits para juntar aos 9 números iniciais que são gerados
ou fornecidos pelos usuário, retornado o cpf gerado formatado com potos e traço*/

import generateDigits from './generateDigits.js'

export default function showResult(cpf){
	
	let dig1 = generateDigits(cpf,0,9)
	cpf.push(dig1)
	let dig2 = generateDigits(cpf,1,10)
	cpf.push(dig2)
	let n = cpf
	return (`${n[0]}${n[1]}${n[2]}.${n[3]}${n[4]}${n[5]}.${n[6]}${n[7]}${n[8]}-${n[9]}${n[10]}`)
}