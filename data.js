const fs = require('fs')

const sumDegree = (degree) => {
    let sum = 0
    if (degree.length) {
      degree.forEach(degree => {  
        sum += degree
      });
    }
    return sum
  }
    
const loadstuds = () => {
    try {
      const data = fs.readFileSync('./notes.json').toString()
      let records = JSON.parse(data)
       records.forEach(student => {
        student.total = sumDegree(student.degree)
      })
  
      return records
    } 
    catch (e) {

     }
  }
  
  const addStud = (students) => {
    fs.writeFileSync('./notes.json', JSON.stringify(students))
  }

  const add = (id, name, degrees, comment) => {
    const student= loadstuds()

    const duplication = student.filter(student => student.id == id)
  
    if (duplication.length) {
      console.error(id,'Exists')
    } else {
      studs.push(
        {
          id, name, degrees, comment
        }
      )
      addStud(students)
    }
  }           

const remove=(id)=>{
  const students = loadstuds()
  const filterStud = students.filter((student) => student.id == id)
  addStud(filterStud)
}

const read=(id)=>{
  const students = loadstuds()
  const filterStud = students.filter((student) => student.id == id)
  console.log(filterStud)
}

const list=()=>{
  const students = loadstuds()
  console.log(students)
}

module.exports = {
  add,
  remove,
  read,
  list
}
