const createBase = base => {
  return num => num + base
}

const addSix = createBase(6)
console.log(addSix(10))
console.log(addSix(21))