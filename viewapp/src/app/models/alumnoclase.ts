export class AlumnoClase {

    id!:number;
    nombre!:string;
    apellido!:string;
    email!:string;
    creadoEn!:string;
    edad!:number;

    constructor()
    {
        //this aquí es el objeto nuevo, el nuevo ALumno
        this.id=0;
        this.nombre='';
        this.apellido='';
        this.email='';
        this.edad=0;
    }
    
}
