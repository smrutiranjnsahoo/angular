function ClassDecorator(constructor:Function){
    constructor.prototype.indian = true;
}

@ClassDecorator
class Person{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;

    }
    getName() : string {
        return this.name;
    }
}


let p:Person = new Person(100,"Test");
//console.log(p.getName());
console.log(p.getName(),p['indian']);