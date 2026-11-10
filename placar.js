const placar = 
{
    corFundo:"black",
    corTexto:"white",
    largura:800,
    altura:60,
    pontuacao:0,
    desenhar()
    {
// Desenha o fundo do placar
        canvasCtx.fillStyle=this.corFundo;
        canvasCtx.fillRect(0,0,this.largura,this.altura);
// Escreve o título

        canvasCtx.fillStyle=this.corTexto;
        canvasCtx.textAlign="center";
        canvasCtx.textBaseline="middle";
        canvasCtx.font="18px Fantasy";
        canvasCtx.fillText("Jogo da Cobra",400,30);
// Escreve a pontuação

        canvasCtx.font="14px Fantasy";
        canvasCtx.textAlign="left";
        canvasCtx.textBaseline="top";
        canvasCtx.fillText(this.pontuacao + " pontos" , 10, 40);
// Escreve as vidas

        canvasCtx.textAlign="right";
        canvasCtx.fillText(cobra.vida + " vidas" , 790, 40);
    }
}
