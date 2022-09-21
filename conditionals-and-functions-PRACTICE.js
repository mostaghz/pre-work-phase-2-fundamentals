function compareMeatDistPrices (horse, beef) {
    let horseIsLower = horse < beef;
    if (horseIsLower) {
        console.log("Conway Meats has a lower price for burger patties because it's actually horse meat.")
    } else if (beef < horse) {
        console.log("Nice to Meat You has a lower price but for fewer burger patties because it's real beef.")
    } else {
        console.log("Conway Meats and Nice to Meat You would never have equal prices for the same amount of burger patties. There is no point in switching meat distributors.")
    }
}

compareMeatDistPrices(400, 650);
compareMeatDistPrices(400, 325);
compareMeatDistPrices(400, 400);

//                     0              1                2                  3           4                   5                6
let priceBoardArray = ['Regular $5', 'Special $5.95', 'Cheese Add $.50', 'Fries $2', 'Side Salad $2.50', 'Soft Drink $2', 'Beer $4'];

let arrLen = priceBoardArray.length;
for (let i = 0; i<arrLen; i++) {
    console.log(priceBoardArray [i]);
    }