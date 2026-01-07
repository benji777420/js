const czolg = {
    nazwa: "T-90",
    kolor: "zielony",
    amunicja: 3,

    info(){
    console.log("Nazwa:" + this.nazwa);
    console.log("Kolor:" + this.kolor);
    console.log("Amunicja:" + this.amunicja);
    }
};

czolg.pomaluj = function (nowyKolor) {
    this.kolor = nowyKolor;
    console.log("Czołg został przemalowany na: " + this.kolor);
};

czolg.zaladuj = function (ile) {
    this.amunicja += ile;
    console.log("Załadowano: " + ile);
    console.log("Obecna amunicja:" + this.amunicja)
};

czolg.strzelaj = function (){
    if (this.amunicja > 0) {
        this.amunicja--;
        console.log("Boom! Pozostała amunicja: " + this.amunicja);
    } else {
        console.log("Brak amunicji!")
    }
};

czolg.info();

czolg.pomaluj("kamuflaż");
czolg.info();

czolg.zaladuj(3);
czolg.strzelaj();
czolg.strzelaj();

czolg.info()