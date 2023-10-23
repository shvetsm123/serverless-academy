const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sort = {
    first: "\n1. Sort words alphabetically",
    second: "\n2. Show numbers from lesser to greater",
    third: "\n3. Show numbers from bigger to smaller",
    fourth: "\n4. Display words in ascending order by number of letters in the word",
    fifth: "\n5. Show only unique words",
};

const myFn = () => {
    rl.question(
        "Enter a list of words or numbers separated by spaces: ",
        (input) => {
            const values = input.trim().split(" ");
            // console.log(values);

            rl.question(
                `What would you like to do with the input?${sort.first} ${sort.second} ${sort.third} ${sort.fourth} ${sort.fifth} \n \n Select (1-5) and press ENTER  `,
                (number) => {
                    switch (number) {
                        case "1":
                            const first = values
                                .filter((value) => isNaN(value))
                                .sort();
                            console.log(first);
                            break;

                        case "2":
                            const second = values
                                .filter((value) => !isNaN(value))
                                .map((num) => Number(num))
                                .sort((a, b) => a - b);
                            console.log(second);
                            break;

                        case "3":
                            const third = values
                                .filter((value) => !isNaN(value))
                                .map((num) => Number(num))
                                .sort((a, b) => b - a);
                            console.log(third);
                            break;

                        case "4":
                            const fourth = values
                                .filter((value) => isNaN(value))
                                .sort((a, b) => a.length - b.length);
                            console.log(fourth);
                            break;

                        case "5":
                            const fifth = values.filter((value) =>
                                isNaN(value)
                            );
                            const unique = new Set(fifth);
                            console.log(unique);
                            break;

                        case "exit":
                            rl.close();
                            return console.log("See you soon!");

                        default:
                            console.log("Invalid value");
                            break;
                    }
                    myFn();
                }
            );
        }
    );
};

myFn();
