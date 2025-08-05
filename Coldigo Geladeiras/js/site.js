function vaildaFaleConosco()
{
    if(document.frmfaleconosco.txtnome.value=="")
    {
        alert("Preencha o campo Nome");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    if(document.frmfaleconosco.txtfone.value=="")
        {
            alert("Preencha o campo Telefone");
            document.frmfaleconosco.txtfone.focus();
            return false;
        }

        if(document.frmfaleconosco.txtemail.value=="")
            {
                alert("Preencha o campo E-mail");
                document.frmfaleconosco.txtemail.focus();
                return false;
            }

            if(document.frmfaleconosco.selmotivo.value=="")
                {
                    alert("Preencha o campo Motivo");
                    document.frmfaleconosco.selmotivo.focus();
                    return false;
                }

                if(document.frmfaleconosco.txtcomentario.value=="")
                    {
                        alert("Preencha o campo Comentário");
                        document.frmfaleconosco.txtcomentario.focus();
                        return false;
                    }
    return true
}

function verificarMotivo(motivo)
{
    //capturamo a estrutura da div cujo ID é opcaoProduto na variável elemento
    var elemento = document.getElementById("opcaoProduto");
    
    // Limpa o conteúdo existente
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

    if(motivo == "PR")
    {
        //criamos um elemento (tag) <select> e gardamos na variável homônica
        var select = document.createElement("select");
        //setamos nesse novo select o atributo 'name' com o valor 'selproduto'
        select.setAttribute("name","selproduto");
        //Conteúdo altual da varialve selct:
        // <select name="selproduto"></select>
        
        //Criamos a opção padrão "Escolha"
        var optionDefault = document.createElement("option");
        optionDefault.setAttribute("value","");
        optionDefault.appendChild(document.createTextNode("Escolha"));
        select.appendChild(optionDefault);
        //Conteúdo atual da variálve select
        //<select name="selproduto"><option value="">Escolha</option></select>
 
        //Criamos um Elemento (tag) <option> e gardamos na variável homônica
        var option = document.createElement("option");
        //setamos nesse novo option o atributo 'value' com o valor "FR"
        option.setAttribute("value","FR");
        //criamos um nó de texto "Freazer" e gravamos na variavel 'texto'
        var texto = document.createTextNode("Freezer");
        //Colocamos o nó de texto críado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variálve option
        //<option value="FR">Freezer</option>

        select.appendChild(option);
        //Conteúdo atual da variálve select
        //<select name="selproduto">
        //<option value="">Escolha</option><option value="FR">Freezer</option>
        //</select>

        //Criamos um Elemento (tag) <option> e gardamos na variável homônica
        var option = document.createElement("option");
        //setamos nesse novo option o atributo 'value' com o valor "GE"
        option.setAttribute("value","GE");
        //criamos um nó de texto "Geladeira" e gravamos na variavel 'texto'
        var texto = document.createTextNode("Geladeira");
        //Colocamos o nó de texto críado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variálve option
        //<option value="GE">Geladeira</option>

        //Colocamos o option criado como "filho" da tag select
        select.appendChild(option);
        //Conteúdo atual da variálve select
        //<select name="selproduto">
        //<option value="">Escolha</option>
        //<option value="FR">Freezer</option>
        //<option value="GE">Geladeira</option>
        //</select>

        //Colocamos o select criado como "filho" da div opcaoProduto
        elemento.appendChild(select);
    }
}

// assim que o ducumento html for carregado por completo
$(document).ready(function()
{
    // CORREÇÃO: Caminhos ajustados para a estrutura do projeto
    $("header").load("/ProjetoTriLhaWeb/pages/general/CABEÇALHO.html")
    $("nav").load("/ProjetoTriLhaWeb/pages/general/MENU.html")
    $("footer").load("/ProjetoTriLhaWeb/pages/general/Rodape.html")
});