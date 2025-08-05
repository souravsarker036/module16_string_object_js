const school = 'Begum Rokeya University';
// console.log(school)
// console.log(school.toLowerCase())
// console.log(school.toUpperCase())

// const subject = 'Bangla'
// const book ='bangla'

// if(subject.toLowerCase() === book.toLowerCase()){   /* to fixed all value upper or lower case*/
//     console.log('I am reading book')
// }
// else{
//     console.log('Pormu na')
// }
const subject = ' Bangla'
const book ='bangla '

if(subject.trim() === book.trim()){
    console.log('I am reading book')    /* remove white space*/
}
else{
    console.log('Pormu na')
}