// * Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number) {
  let num = String(number)
  let thouthend = null
  let hundred = null
  let ten = null
  let one = null
  let numObj = {}

  if (num.length === 4) {
    thouthend = num.slice(0, 1)
    numObj['+1000'] = num.slice(0, 1)
    num = num.slice(1, num.length)
  }
  if (num.length === 3) {
    numObj['+100'] = num.slice(0, 1)
    hundred = num.slice(0, 1)
    num = num.slice(1, num.length)
  }
  if (num.length === 2) {
    numObj['+10'] = num.slice(0, 1)
    ten = num.slice(0, 1)
    num = num.slice(1, num.length)
  }
  if (num.length === 1) {
    numObj['+1'] = num.slice(0, 1)
    one = num
  }

  //об'єкт перевожу в масив. виконую функцію фільтрації. і знову перевожу в об'єкт
  numObj = Object.fromEntries(Object.entries(numObj)
    .filter(([el, val]) => parseInt(val) != 0))

  console.log(numObj)

    function segregator(numberObject) {
      let result = ''
      const romanianNumbers = {
        start: {
          1: 'I',
          10: 'X',
          100: 'C',
          1000: 'M'
        },
        beforeCenter: {
          1: 'IV',
          10: 'XL',
          100: 'CD',
          1000: 'M`V'
        },
        center: {
          1: 'V',
          10: 'L',
          100: 'D',
          1000: '`V'
        },
        beforeFinish: {
          1: 'IX',
          10: 'XC',
          100: 'CM',
          1000: 'M`X'
        },
        finish: {
          1: 'X',
          10: 'C',
          100: 'M',
          1000: '`X'
        }
      }
    
      for (const key in numberObject) {
        if (Object.hasOwnProperty.call(numberObject, key)) {
          const num = parseInt(numberObject[key])
          const type = parseInt(key)
          const start = 1
          const center = 5
          const finish = 10
          let str = ''
    
          for (let i = 0; i <= num; i++) {
            if (i >= start && i < center - 1) {
              str = str + romanianNumbers.start[type]
            } else if (i === center - 1) {
              str = romanianNumbers.beforeCenter[type]
            } else if (i === center) {
              str = romanianNumbers.center[type]
            } else if (i > center && i < finish - 1) {
              str = str + romanianNumbers.start[type]
            } else if (i === finish - 1) {
              str = romanianNumbers.beforeFinish[type]
            } else if (i === finish) {
              str = romanianNumbers.finish[type]
            }
          }
          result += str
        }
      }
      return result
    }

  return segregator(numObj)
}

console.log(solution(11))
