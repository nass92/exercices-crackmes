let password = ''

const crackme11 = (password) => {
  if (password.length > 20) {
    if (password[0].charCodeAt() > 73) {
      if (password[1].charCodeAt() > 68) {
        if (password[2].charCodeAt() > 80) {
          console.log('BAD')
        } else if (password[3].charCodeAt() < 77) {
          if (password[4].charCodeAt() < 66) {
            if (password[5].charCodeAt() < 80) {
              if (password[6].charCodeAt() <= 73) {
                console.log("Bad")
              } else if (password[7].charCodeAt() >= 88) {
                if (password[8].charCodeAt() <= 73) {
                  if (password[9].charCodeAt() >= 77) {
                    if (password[10].charCodeAt() === 73) {
                      if (password[11].charCodeAt() <= 73) {
                        console.log("Bad")
                      } else if (password[12].charCodeAt() === 73) {
                        if (password[13].charCodeAt() >= 70) {
                          if (password[14].charCodeAt() < 73) {
                            if (password[15].charCodeAt() >= 85) {
                              if (password[16].charCodeAt() < 68) {
                                if (password[17].charCodeAt() > 68) {
                                  if (password[18].charCodeAt() > 79) {
                                    if (password[19].charCodeAt() < 83) {
                                      console.log("Bad")
                                    } else if (password[20].charCodeAt() > 73) {
                                      console.log("ok")

                                    } else {
                                      console.log('BAD')
                                    }

                                  } else {
                                    console.log('BAD')
                                  }
                                } else {
                                  console.log('BAD')
                                }
                              } else {
                                console.log('BAD')
                              }
                            } else {
                              console.log('BAD')
                            }
                          } else {
                            console.log('BAD')
                          }
                        } else {
                          console.log('BAD')
                        }

                      } else {
                        console.log('BAD')
                      }
                    } else {
                      console.log('BAD')
                    }
                  } else {
                    console.log('BAD')
                  }

                } else {
                  console.log('BAD')
                }
              } else {
                console.log('BAD')
              }
            } else {
              console.log('BAD')
            }
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }

      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }

  } else {
    console.log('BAD')
  }
}
crackme11(password)