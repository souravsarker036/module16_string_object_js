const college = {
    name: 'abc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibosh'],
    unique: {
        color: 'blue',
        result: {
            gpa: '5',
            merit: 'top',
        }
    }
}
// console.log(college.unique) //given an object
// console.log(college.unique.color) // give the value
// console.log(college.unique.result.merit)

college.events[1]= '16 december'
console.log(college.events[1])