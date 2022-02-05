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