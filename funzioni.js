function registra(){
      var NomeRegi = document.getElementById("NomR").value;
      var pasRegi = document.getElementById("pasR").value;
      document.write(NomeRegi, pasRegi);
    }
Lprodotti = new Array;
function Prodottieprezzi(){
      prodotti = new Array;
      var prodotto = document.getElementById("lampone").value;
      prodotti.push(prodotto);
      document.write(prodotti)
    }
function provacheck(){
        document.write(Lprodotti);
    }
function aggiungi(SingoloProd){
     Lprodotti.push(SingoloProd);
    }
function verificanome()
    {

      var NomeArr = [ {name : 'chiara', password : 'Ciaretta28.'}, {name: 'laura', password : 'lalli03'}];
      if (document.getElementById("txtname".value==""))
      {
        alert("Inserire un nome valido");

        document.getElementById("txtname").focus();

        return(false);
      }
      else {
        var exist = false;
        for (var i = 0; i <NomeArr.length; i++) {
        if (NomeArr[i].name== document.getElementById("txtname").value) {
          exist = true;
          verifica(NomeArr[i].password)
        }
        }
        if (exist == false)
        {
          document.write("nome utente inesistente");
        }
      }

    }
function verifica(perspas)
    {

      if (document.getElementById("txtpassword").value=="")

    {

     alert("Inserire una password valida");

     document.getElementById("txtpassword").focus();

     return(false);

    }
    else {
      var check = false;

      if (perspas.toString() == document.getElementById("txtpassword").value)
      {
          self.location.href='/home/chiara/Scrivania/PaginaBusiness/pagina2.html'
      }
      else {
        document.write("password errata");
      }

      }

    }

function checkcheckbox(){

  inputs =document.getElementsByTagName("input");
  selectProducts = new Array;
  str= "";
  for(var i = 0; i < inputs.length; i++)
  {
   if(inputs[i].type == "checkbox")
   {
      if(inputs[i].checked == true)
      {
          selectProducts.push(inputs[i].name);
      }
    }
  }
  for (var i = 0; i < selectProducts.length; i++) {
    str = str + selectProducts[i] + " ";
  }
  document.write(str);
}
