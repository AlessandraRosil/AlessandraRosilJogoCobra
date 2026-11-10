const tela = {
    cor: "green",
    altura:400,
    largura:800,
    desenhar(){
        canvasCtx.fillStyle=this.cor;
        canvasCtx.fillRect(0,0,this.largura,this.altura)
    }
}
