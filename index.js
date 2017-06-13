module.exports = {

  convert: function(str) {

    let spongified = ""
    let check = "upper"
    let regexp = /[a-zA-Z]/

    for (let i of str) {

      if (check === "lower" && i.match(regexp) !== null) {
        i = i.toLowerCase()
        check = "upper"
      } else if (i.match(regexp) !== null) {
        i = i.toUpperCase()
        check = "lower"
      }

      spongified += i

    }

    return spongified

  }

}
