
const fechaAho= new Date();



var persona={
	nombre:null,
	apellido:null,
	FechaNacimiento:null,
	edad:null,

	years(){
		this.edad= fechaAho.getFullYear() - this.FechaNacimiento.substring(0,4);
		
		if(this.FechaNacimiento.substring(5,7)>fechaAho.getDay()){
			this.edad=this.edad-1;

		}else if(this.FechaNacimiento.substring(5,7)==fechaAho.getDay()){

			if(this.FechaNacimiento.substring(8,10)>fechaAho.getDate()-1){
				this.edad=this.edad-1;
			}
		
		}else{
			this.edad= fechaAho.getFullYear() - this.FechaNacimiento.substring(0,4);
		}
	}
}


function Save(){
persona.nombre=document.getElementById("name").value;
persona.apellido=document.getElementById("ap").value;
persona.FechaNacimiento=document.getElementById("FechaNac").value;

persona.years();
alert("guardado exitosamente");

}

function mostrar(){
	alert("buenas tardes, mi nombre es "+persona.nombre+" "+persona.apellido+" y mi edad es de "+persona.edad+" años :D");
}