const cobra = {
    x: 0,
    y: 260,
    vida: 3,
    tamanho: 10,
    cor:"#BA8E23",
    direcao: "direita",
    desenhar(){
        canvasCtx.fillStyle=this.cor;
        canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    }
}
cobra.desenhar();