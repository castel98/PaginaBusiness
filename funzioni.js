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
