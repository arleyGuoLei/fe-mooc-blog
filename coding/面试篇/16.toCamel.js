function toCamel(str) {
  return str.replace(/(-\w)/g, function(match, $1) {
    return $1.toUpperCase()
  })
}

console.log(toCamel('ab-cd-ef'))// ab-Cd-Ef
