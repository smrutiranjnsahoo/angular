import {add} from "./second";
/*function add(x:number,y:number) : number{
    return x+y;
}*/
console.log(add(3,4));

interface Book {
    id:number;
    title:string;
    price?:Number
};

function addBook(book:Book){
    console.log(book);
}
addBook({"id" : 1,"title":"Angular book"

});