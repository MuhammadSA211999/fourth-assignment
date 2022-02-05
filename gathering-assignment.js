// problem 1:
function anaToVori(ana) {
    let vori = 0;
    if (ana <= 0 || typeof ana == 'boolean' || typeof ana == 'string') {
        return 'Please enter a valid number!.Like 12345...'
    }
    else if (ana > -1 && ana != 0) {
        vori = ana / 16
        return vori;
    }

}
let totalVori = anaToVori(0.003);
console.log(totalVori);

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

// problem 3:
function picnicBudget(totalPerson) {
    let totalBudget = 0;
    if (totalPerson <= 0 || typeof totalPerson != 'number') {
        return 'Please enter a valid sum!!';
    }
    else if (totalPerson >= 1 && totalPerson <= 100) {
        totalBudget = totalPerson * 5000;
    }
    else if (totalPerson >= 101 && totalPerson <= 200) {
        costForFirst100 = 100 * 5000;
        costForSecond100 = (totalPerson - 100) * 4000;
        totalBudget = costForFirst100 + costForSecond100;
    }
    else if (totalPerson >= 201) {
        costForFirst100 = 100 * 5000;
        costForSecond100 = 100 * 4000;
        costForUpper200 = (totalPerson - 200) * 3000;
        totalBudget = costForFirst100 + costForSecond100 + costForUpper200;
    }
    return totalBudget;

}
let totalCost = picnicBudget(700);
console.log(totalCost)

// problem 4:
const friendNames = ['Muhammad', 'Barke', 'Noyon Ahmed Sagor', 'Ali', 'Juned', 'Sakib', 'Samad', 'Alid', 'Abdullah', 'Joynal', 'Amin', 'Ahad'];
function oddFriend(names) {
    let firstOddName = [];
    for (let name of names) {
        if (typeof name == "number" || typeof name == 'boolean') {
            return 'Please enter string data in your array!!'
        }
        else if (name.length <= 1) {
            return 'Please enter a name which contains minimum three latter!!'
        }
        else if (name.length % 2 == 1) {
            firstOddName.push(name);
            break;
        }

    }
    return firstOddName;
}
let findFirstOddName = oddFriend(friendNames);
console.log(findFirstOddName);