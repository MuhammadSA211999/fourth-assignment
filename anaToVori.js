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