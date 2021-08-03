module.exports = class Quadrado {
    costructor(largura) {
        this.largura = largura;
    }

    area() {
        return this.largura ** 2;
    }
}