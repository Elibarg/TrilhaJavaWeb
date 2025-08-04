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
    if(motivo == "PR")
    {
        //criamos um elemento (tag) <select> e gardamos na variável homônica
        var select = document.createElement("select");
        //setamos nesse novo select o atributo 'name' com o valor 'selproduto'
        select.setAttribute("name","selproduto");
        //Conteúdo altual da varialve selct:
        // <select name="selproduto"></select>
        
        //Colocamos o option como "filho" da tag select criada
        select.appendChild(option);
        //Conteúdo atual da variálve select
        //<select name="selproduto"><option value="">Escolhas</option></select>
 
        //Criamos um Elemento (tag) <option> e gardamos na variável homônica
        var option = document.createElement("option");
        //setamos nesse novo option o atributo 'value' com o valor "FR"
        option.setAttribute("value","FR");
        //criamos um nó de texto "Freazer" e gravamos na variavel 'texto'
        var texto = document.createTextNode("Freazer");
        //Colocamos o nó de texto críado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variálve option
        //<option value="FR">Freazer</option>

        select.appendChild(option);
        //Conteúdo atual da variálve select

        //<select name="selproduto">
        //<option value="">Escolhas</option><option value="FR">Freazer</option>
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

        //Colocamos o nó de texto críado como "filho" da tag option criada
        select.appendChild(option);
        //Conteúdo atual da variálve select

        //<select name="selproduto">
        //<option value="">Escolhas</option><option value="FR">Freazer</option><option value="GE">Geladeira</option>
        //</select>

        //Colocamos o nó de texto críado como "filho" da tag option criada
        elemento.appendChild(select);
        //se o valor da variável motivo no for "PE"
    }else{
        //se a div possuir algum "primeiro filho"
        if(elemento.firstChild)
        {
           //remove ele
           elemento.removeChild(elemento.firstChild);
        }
    }
}
// assim que o ducumento html for carregado por completo
$(document).ready(function()
{
    $("header").load("/TrilhaJavaWeb/js folder/jQuery/Coldigo Geladeiras/pages/CABEÇALHO.html")
    $("nav").load("/TrilhaJavaWeb/js folder/jQuery/Coldigo Geladeiras/pages/MENU.html")
    $("footer").load("/TrilhaJavaWeb/js folder/jQuery/Coldigo Geladeiras/pages/Rodape.html")
});