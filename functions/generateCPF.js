 /* Gera 9 dígitos aleatoriamente e complementa á esquerda com zeros caso seja gerado om número
 com menos´de 9 dígitos e chama o módulo showResult passando o valor gerado, para então gerar os 
 dois dígitos verificadores  para depois mostrar em tela*/
import showResult  from'../modules/showResult.js'

let showCpf = document.querySelector("#mostraCpf")

export default function generateCPF(){

	let numRand = Math.floor(Math.random() * 1000000000)

	let cpf = numRand.toString().split('')

	while (cpf.length < 9){

		let add0 = cpf.reverse()

		add0.push('0')

	cpf = add0.reverse()

	}

	showCpf.value = showResult(cpf)
}