i = 1
array = [1]
let objetooooooo = [
    {
        razaoSocial: "",
        CNPJ: 0,
        nomeFantasia: "",
        inscricalEstadual: "",
        CEP: "",
        InscricaoMunicipal: "",
        Endereco: "",
        Complemento: "",
        Numero: "",
        Bairro: "",
        Estado: "",
        Municipio: "",
        nomePessoaContato: "",
        telefone: "",
        email: "",
    }
]

function adcElemento () {
    i++
    array.push(i)
    // cria um novo elemento div
    // e dá à ele conteúdo
    
    conteudo = getConteudo();
    

    var divNova = document.createElement('div');
    
    //divNova.id=i
    divNova.innerHTML = conteudo;
    
    
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    document.getElementById("elementosAdicionais").append(divNova);
    

    function getConteudo(){

        conteudo = '<div class="row mt-3" id="div'+i+'">'+
        '<div class="col-sm-1">'+
          
          '<i class="fa fa-trash text-danger align-middle" aria-hidden="true" onclick="removeElemento('+i+')"></i>'+


        '</div>'+


        '<div class="col-sm-11 border border-dark p-3">'+

              '<div class="row">'+
                  '<label class="col-sm-2 col-form-label">Descrição do Produto: </label>'+
                  '<div class="col-md-10">'+
                  '<input type="email" class="form-control" id="inputDescricaoProduto'+i+'">'+
                  '</div>'+
  
                  '<div class="col-md-2">'+
                      '<label class="form-label">Und. Medida</label>'+
                      '<input type="number" class="form-control" id="inputUnidadeMedida'+i+'" value="" required>'+
                  '</div>'+
  
                  '<div class="col-md-2">'+
                  '<label class="form-label">Qtd em Estoque</label>'+
                  '<input type="number" class="form-control" id="inputQtdEstoque'+i+'" value="" required>'+
                  '</div>'+
  
                  '<div class="col-md-2">'+
                      '<label class="form-label">Valor Unitário</label>'+
                      '<input type="number" class="form-control" id="inputValorUnitario'+i+'" value="" required>'+
                  '</div>'+
  
                  '<div class="col-md-2">'
                  '<label class="form-label">Valor Total</label>'+
                  '<input type="number" class="form-control" id="inputValorTotal'+i+'" value="" required>'+
                  '</div>'+
              '</div>'+
        '</div>'

        return conteudo
    }
}

function removeElemento(id){
    if (window.confirm(`Deseja deletar o ${id}?`)) {
        var el = document.getElementById('div'+id);
        el.remove(el);
        posicao = array.indexOf(id);posicao
        array.splice(posicao, 1);
      }
    alert(array)
    
}

function save(){
    event.preventDefault();

    razaoSocial = document.getElementById('inputRazaoSocial1').value;
    nomeFantasia = document.getElementById('inputNomeFantasia1').value;

    const objeto = new Object()
    objeto.razaoSocial = razaoSocial
    objeto.nomeFantasia = nomeFantasia

    produtos = new Object()
    
    for (i=0; i < array.length; i++){
        nomeDescricaoProduto = document.getElementById('inputDescricaoProduto'+array[i]).value;
        
        produtos.indice = i;
        produtos.descricaoProduto = nomeDescricaoProduto
        
    }
    objeto.produtos = produtos
   
    

    localStorage.setItem('dados',JSON.stringify(objeto));

    
}