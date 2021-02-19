let password = 'B'

const crackme2 = (password) => {
  if (password.length === 1) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)