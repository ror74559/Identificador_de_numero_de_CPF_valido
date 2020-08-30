/* verifica se o número de 11 dígitos inseridos pelo usuário possui os dois últimos dígitod de acordo
com a regra de formação de um CPF e retorna o resultado*/
export default function result(check1, check2,t){

	if(check1 == t[0]){
 		if(check2 == t[1]){
 			return `<h4 style = "color:green;">Em conformidade com as regras de formação de um CPF</h4>`
	 		} else{
	 			return `<h4 style = "color:red;">Fora de conformidade com as regras de formação de um CPF</h4>`
	 		}
	 	} else{
	 		return `<h4 style = "color:red;">Fora de conformidade com as regras de formação de um CPF</h4>`
	 }


}

