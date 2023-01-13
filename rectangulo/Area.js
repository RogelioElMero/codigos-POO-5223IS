class Rectangulo{
    base=null;
    altura=null;

    constructor(Base,Altura){
        this.altura=Altura;
        this.base=Base;
    }

    area=function(){
      return this.base*this.altura;
    }
}


calcular=function(){  
    var Rect =new Rectangulo( document.getElementById("Bas").value, document.getElementById("Altu").value);
    alert("el area del rectangulo es: "+Rect.area());
    
}