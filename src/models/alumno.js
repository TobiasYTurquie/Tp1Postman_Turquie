export default class Alumno{
    constructor(username, dni, edad){
        this.username = username
        this.dni = dni
        this.edad = edad
        
    }
    
    toString(){
        return `Hola, mi nombre es ${this.username} y mi DNI es ${this.dni}`
    }
    
}