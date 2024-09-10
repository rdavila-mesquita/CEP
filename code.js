async function pesquisarCEP(){
    var cep = document.getElementById("cep")

    if(cep.value == "")
        alert("CEP vazio")
    else{
        //chamada da API
        //https://viacep.com.br/ws/62823000/json/


        try{
            var resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

            var dados = await resposta.json()
        }catch(e){
            alert ("CEP Inválido!")
        }
        

        console.log(dados)
        console.log(dados.localidade)
        console.log(dados.regiao)

        var logradouro = document.getElementById("log")
        logradouro.innerHTML = dados.logradouro
        var bairro = document.getElementById("bairro")
        bairro.innerHTML = dados.bairro
        var localidade = document.getElementById("loc")
        localidade.innerHTML = dados.localidade
        var estado = document.getElementById("estado")
        estado.innerHTML = dados.estado
    }
}