let kids = [
    {
        age: 15,
    },
    {
        age: 14,
    },
    {
        age: 16,
    },
    {
        age: 17,
    },
]

let result = kids.reduce( (prevValue, currentKid) => {
    let userInput = +prompt("What's your favorite number");
    if (currentKid.age === userInput){
        console.log("This kid was a match");
        prevValue.push(currentKid);
    }else{
        console.log("This kid was NOT a match!");
    }
    console.log(prevValue)
}, [])