/* verifica os 11 números inseridos pelo usuário para checar se os valores estão de acordo com as regras de 
formação de um CPF e mostra em tela se o valor está de acordo ou não.*/
import generateDigits from '../modules/generateDigits.js'

import result from '../modules/result.js'

let showCheck = document.querySelector('#showCheck')

export default function checkCpf(){

	let verificaCpf = document.querySelector('#verificaCpf')

		if(verificaCpf.value.length !== 11){

			alert('Insira 11 dígitos(apenas os números)')

		}else{

		let inic = verificaCpf.value.split('')

		let digs = inic.slice(-2)

		let dig1 = generateDigits(inic,0,9)

		let dig2 = generateDigits(inic,1,10)

		showCheck.innerHTML = result(dig1,dig2,digs)


		}
	
	
}