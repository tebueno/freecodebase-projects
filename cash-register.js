function checkCashRegister(price, cash, cid) {
    let status = 'OPEN';
    let changeDue = +(cash - price).toFixed(2);
    let checkTotal = changeDue;
    let newDrawer = [];
    let total = 0;
    cid.forEach((value, index) => {
        total += value[1];
        let i = cid.length - 1 - index;
        let newDrawerUnitVal = calcChangeByUnit(changeDue, cid[i]);
        changeDue = newDrawerUnitVal[0];
        if (newDrawerUnitVal[2]) {
            newDrawer.push([cid[i][0], newDrawerUnitVal[1]]);
        }
    });
    if (changeDue > 0) {
        status = 'INSUFFICIENT_FUNDS';
        newDrawer = [];
    }
    if (checkTotal === total) {
        status = 'CLOSED';
        newDrawer = cid;
    }
    return [status, newDrawer];
}


function getCurrencyUnit(unit) {
    const currLookupObj = {
        'PENNY': .01,
        'NICKEL': .05,
        'DIME': .10,
        'QUARTER': .25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
    }
    return currLookupObj[unit[0]];
}

function isUnitUsed(amt, unit) {
    const currUnit = getCurrencyUnit(unit);
    const numChangeUnits = parseInt(amt / currUnit);
    return (numChangeUnits) ? true : false;
}

function calcChangeByUnit(amt, unit) {
    const currUnit = getCurrencyUnit(unit);
    const numChangeUnits = parseInt(amt / currUnit);

    if (numChangeUnits) {
        const maxDrawerUnits = parseInt(unit[1] / currUnit);
        const calcReturnUnits = Math.min(numChangeUnits, maxDrawerUnits);
        const newChange = amt - (calcReturnUnits * currUnit);
        const newDrawer = (calcReturnUnits * currUnit);
        return [+newChange.toFixed(2), +newDrawer.toFixed(2), true];
    } else {
        return [amt, unit[1], false];
    }

}

console.log(checkCashRegister(19.5, 20, [
["PENNY", 0.5],
["NICKEL", 0],
["DIME", 0],
["QUARTER", 0],
["ONE", 0],
["FIVE", 0],
["TEN", 0],
["TWENTY", 0],
["ONE HUNDRED", 0]
]));