/*Realiza a os cálculos para gerar cada um dos dígitos verificadores, recebendo como parâmetros 
primeiramente 9 dígitos(cpf)-> strings  o inicio(st) e o fim(end) para relizar um processo de multiplicação de
cada dígito por: 1°digito por 10, 2° digito or 9 3° digito por 8  até chegar no último dígito indicado(end) por 2
os valores das multiplicões são somados , o resultado é dividido por 11 e se o resto for 1 ou 0 retorna
0 senão retorna 11 - resto  */

export default function generateDigits(cpf,st, end){
	let fac = 10
	let calculate = cpf.slice(st,end).reduce((total, num) =>{
		let calc = parseInt(num)*fac
		fac--
		return total + calc
	},0)
	let rest = calculate%11
	if (rest == 0 || rest == 1){
		return 0 
	} else{
		return 11 - rest
	}
}

