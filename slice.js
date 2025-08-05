// const address = 'Rangpur';
// const part = address.slice(2,4) /* slice(x,x) korle string er j index 1st thakbe sekhan theke suru hbe r last j index dibe tar ager index a giye theme jabe*/ 
// console.log(part)

// const sentence = 'I am a good boy';
// console.log(sentence.split()) /* spilt a spilt() faka rakhle ja ache tai array akare return krbe [ ' I am a good boy' ].. spilt('') dile prita word alada alada kre dibe..split(' ') majhkhane fala dile protita eord alada alada kre dibe..split('a') dile jekhane jekhane a pabe vag kre dibe oikhane */

// // console.log(sentence.split(''))
// // console.log(sentence.split(' '))
// console.log(sentence.split('a'))

const friendsStr = 'Rahim, karim,Jodu, modu'
const friends = friendsStr.split(',');
// friendsStr.split(',') krle string er vitor ja achge setake array hisabe vag kre
console.log(friends)

const realFriend = [ 'Rahim', ' karim', 'Jodu', ' modu' ];
// realFriend.join() dile default vabe koma diye diye join krbe 
// realFriend.join('|') dile protitar majhe | diye diye join krbe
console.log(realFriend.join())
console.log(realFriend.join('|'))