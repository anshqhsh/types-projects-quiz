/**
 * Let's make a calculator 🧮
 */
 console.log(calculate1('add', 1, 3)); // 4
 console.log(calculate1('substract', 3, 1)); // 2
 console.log(calculate1('multiply', 4, 2)); // 8
 console.log(calculate1('divide', 4, 2)); // 2
 console.log(calculate1('remainder', 5, 2)); // 1
 //union Type을 이용함

type command = 'add'|'substract'|'multiply'|'divide'|'remainder';

function calculate1(Command : command, a : number,  b: number): number|undefined{
    switch(Command){
        case 'add' :
            return a+b;
        case 'substract' :
            return a-b;
        case 'multiply' : 
            return a*b;
        case 'remainder' : 
            return a % b;
        case 'substract' :
            return a/b;
    }
}