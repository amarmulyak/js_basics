switch(5) {
    case 1:
        answer1 = 'one';
        break;
    case 2:
        answer1 = 'two';
        break;
    default:
        answer1 = 'no matched answer';
        break;
}

switch(3) {
    case 1:
    case 2:
        answer2 = 'low';
        break;
    case 3:
    case 4:
        answer2 = 'mid';
        break;
}


console.log(answer2)