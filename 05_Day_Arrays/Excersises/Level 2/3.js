const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
if (shoppingCart.includes('Honey')) {
    const honeyIndex = shoppingCart.indexOf('Honey')
    shoppingCart.splice(honeyIndex, 1)
}
if (shoppingCart.includes('Tea')) {
    const teaIndex = shoppingCart.indexOf('Tea')
    shoppingCart[teaIndex] = 'Green Tea'
}
console.log(shoppingCart)