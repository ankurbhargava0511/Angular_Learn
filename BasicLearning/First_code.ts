function addValue(num1:number, num2:number):number {
    return num1 + num2;
}

const abc ={
    name :'Luis',
    balance:10
};


interface IAccount{
name:string,
balance:number,
status?:string
};



// object from interface
const account:IAccount={
    name :'Luis',
    balance:10
};

let accounts:IAccount[];

// Class
class InverstmentAccount implements IAccount{
    name: any;
    balance;
    constructor(public _name, public _balance){

    }
}



// Generics

class ValuesCollection<T>{
    private data:T[] = []

    add(item:T)
    {
        this.data.push(item);
    }

    remove()
    {
        this.data.shift();
    }
}

const stringValue= new ValuesCollection<string>();
stringValue.add("test")

//HOC
//Composition
//Closures
//Maxin
// TO add Decorator to config file
//"experimentalDecorators": true,   



function MenuItem(value){
    return class extends value{
        id="abc"
    }
}

@MenuItem
class Pizza{
    id:string;
}

@MenuItem
class Hamburger{
    id:string;
}
console.log(new Pizza().id);



#option 2

function MenuItem(itemId:string){
    return function(value){
    return class extends value{
        id=itemId
    }
}
}

@MenuItem("abc")
class Pizza{
    id:string;
}

@MenuItem("123")
class Hamburger{
    id:string;
}
console.log(new Pizza().id);



