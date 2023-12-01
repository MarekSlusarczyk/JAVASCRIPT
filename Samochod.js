class Samochod {
    constructor(marka, model, cena, rocznik, spalanie) {
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.rocznik = rocznik;
        this.spalanie = spalanie;
    }

    wiek() {
        const aktualnyRok = new Date().getFullYear();
        return aktualnyRok - this.rocznik;
    }

    koszt() {
        const cenaPaliwaZaLitr = 6.50;
        const spalanie = this.spalanie;
        const kosztPaliwa = cenaPaliwaZaLitr * spalanie;
        return kosztPaliwa + ' zł'
    }
}