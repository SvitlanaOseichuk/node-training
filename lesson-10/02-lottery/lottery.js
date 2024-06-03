import generateNumber from "./generateNumber.js"


function lottery(expect)  {

    const actual = generateNumber();

    if (actual !== expect) {
        return "You are loser"
    }

    return "$$$you win"
}


// console.log(lottery(34))
export default lottery;