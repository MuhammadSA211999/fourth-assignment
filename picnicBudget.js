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