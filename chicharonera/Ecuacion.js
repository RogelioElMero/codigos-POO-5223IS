class Ecuacion{
    static Coeficientes = new Array(3);    


	static resolver = function(){
		let raiz, x1, x2, contRaiz;
		this.Coeficientes[0]=parseFloat(document.getElementById("cuadrado").value);
		this.Coeficientes[1]=parseFloat(document.getElementById("lineal").value);
		this.Coeficientes[2]=parseFloat(document.getElementById("independiente").value);
		
		//alert(`A=${this.Coeficientes[0]}   B=${this.Coeficientes[1]}   C=${this.Coeficientes[2]}`);
		
		contRaiz=parseFloat((Math.pow(this.Coeficientes[1],2))-4*(this.Coeficientes[0])*(this.Coeficientes[2]));

		if (contRaiz<0) {
			alert("las raizes son imaginarias");
		}else{
			raiz=parseFloat(Math.sqrt(contRaiz));
			x1=parseFloat((-(this.Coeficientes[1])+raiz)/(2*(this.Coeficientes[0])));
			x2=parseFloat((-(this.Coeficientes[1])-raiz)/(2*(this.Coeficientes[0])));
			
			alert(`las raizes de la ecuacion son X1=${x1} y X2=${x2}`);
		}
	}

}
