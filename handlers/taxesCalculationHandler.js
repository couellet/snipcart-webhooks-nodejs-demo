module.exports = {
    calculateTaxes: (cart) => {
        return {
            taxes: [
                { name: 'TPS', amount: cart.total*0.05 },
                { name: 'TVQ', amount: cart.total*0.09975 },
            ]
        }
    }
}