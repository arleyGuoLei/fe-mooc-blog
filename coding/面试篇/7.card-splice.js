const card = '12345678901234567890'
console.log(card.replace(/(\d{4})(?=\d)/g, '$1_'))
