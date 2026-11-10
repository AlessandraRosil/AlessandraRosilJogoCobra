const maca = {
    x: 200,
    y: 200,
    tamanho: 10,
    cor: "#FF0000",

    desenhar() {
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    },

    reposicionar() {
        const colunas = Math.floor(canvasElemento.width / this.tamanho);
        const linhas = Math.floor(canvasElemento.height / this.tamanho);

        this.x = Math.floor(Math.random() * colunas) * this.tamanho;
        this.y = 60 + Math.floor(Math.random() * Math.floor((canvasElemento.height - 60) / this.tamanho)) * this.tamanho;
    }
};

