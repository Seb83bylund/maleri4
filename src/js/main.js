export default function calculator(work, jobIndex, amount) {

    const cost = work[1][jobIndex] * amount;
    let rotDiscount = 0;
    let endCost = 0;
    let paintCost = 0;
    let plasterCost = 0;
    let mtrlCost = 0;
    let returnData = [];

    if (cost < 16666) {
        rotDiscount = cost * 0.3;
    } else { 
        rotDiscount = 50000;
    }

    endCost = cost - rotDiscount;

    if (work[4][jobIndex] === true) {
        paintCost = work[2][jobIndex] * amount;
    }

    if (work[5][jobIndex] === true) {
        plasterCost = work[3][jobIndex] * amount;
    }

    mtrlCost = paintCost + plasterCost;

    returnData = [work[0][jobIndex], cost, rotDiscount, endCost, mtrlCost];

    return returnData;
}
