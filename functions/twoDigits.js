/*verifivca se foram inseridos 9 dígitos para ser gerado os dois dígitos do cpf e chama o módulo
showResult passando o valor digitado, para então gerar os dois dígitos verificadores*/


import showResult  from'../modules/showResult.js'

let showCpf = document.querySelector('#cpf2dig')

export default function twoDigits(){

	let calculaCpf = document.querySelector('#calculaCpf')

	if(calculaCpf.value.length == 9){

		let cpf = calculaCpf.value.split('')

		showCpf.innerHTML = showResult(cpf)

	} else{

		alert('Insira apenas 9 dígitos para que os dígitos verificadores sejam gerados.')

	}
	

}