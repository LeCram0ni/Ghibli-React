let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let divable = [];
let nondivable = []
let output = [];

function calcDivThree() {
    for (key in numbers) {
        num = numbers[key];

        if (num % 3 == 0) {
            divable.push(num);
        } else {
            nondivable.push(num);
        }
    }

    output["divable"] = divable;
    output["nondivable"] = nondivable;

    console.log(output.divable);

}

calcDivThree();