/**
 * Let's make a game 🕹
 */

const position = { x: 0, y: 0};

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

type Direction = 'up'|'down'|'left'|'right';

type Point = { 
    x: number
    y: number
}

function move(direction : Direction ): void | never {
    switch(direction){
        case 'up' :
            ++position.y;
            break; // 아래 case를 실행 x
        case 'down' :
            --position.y;
            break;
        case 'left' :
            --position.x;
            break;
        case 'right' :
            ++position.x;
            break;
        default:
            throw new Error(`unknown direction : ${direction}`);//오류 발생시 어떤 direction인지 알려줌
    }

};
