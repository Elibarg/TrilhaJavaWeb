//
COLDIGO = new Object();

$(document).ready(function(){
    $("header").load("/pages/adm/general/header.html");
    $("footer").load("/pages/adm/general/footer.html");
});

//
//
COLDIGO.carregaPagina = function(pagename){
    //
    $("section").empty()
    //
    $("section").load(pagename+"/", function(respose,status,info){
        if(status == "error") {
            var msg = "Houve um erro ao encontrar a página"
            $("section").html(msg);
        }
    });
}