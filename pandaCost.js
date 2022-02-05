// poroblem 2:
function pandaCost(singara, somucha, jilepi) {
    totoalBill = 0;
    if (typeof singara != 'number' || typeof somucha != 'number' || typeof jilepi != 'number') {
        return 'Please enter only number!!.Like 4, 9, 5 etc'
    }
    else if (singara < 0 || somucha < 0 || jilepi < 0) {
        return 'Please enter a valid sum!!'
    }
    else if (singara >= 0 || somucha >= 0 || jilepi >= 0) {
        singaraPrice = singara * 7;
        somuchaPrice = somucha * 10;
        jilepiPrice = jilepi * 15;
        totoalBill = singaraPrice + somuchaPrice + jilepiPrice;
    }

    return totoalBill;
}
let totalPandaCoast = pandaCost(2, 8, 4);
console.log(totalPandaCoast);