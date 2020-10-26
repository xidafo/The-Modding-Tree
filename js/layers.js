addLayer("c", {
    layer: "c", // This is assigned automatically, both to the layer and all upgrades, etc. Shown here so you know about it
    name: "Candies", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "lollipops", // Name of prestige currency
    baseResource: "candies", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    base: 5, // Only needed for static layers, base of the formula (b^(x^exp))
    roundUpCost: false, // True if the cost needs to be rounded up (use when baseResource is static?)
    canBuyMax() {}, // Only needed for static layers with buy max
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade(this.layer, 166)) mult = mult.times(2) // These upgrades don't exist
        if (hasUpgrade(this.layer, 120)) mult = mult.times(upgradeEffect(this.layer, 120))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    effect() {
        return { // Formulas for any boosts inherent to resources in the layer. Can return a single value instead of an object if there is just one effect
        waffleBoost: (true == false ? 0 : Decimal.pow(player[this.layer].points, 0.2)),
        icecreamCap: (player[this.layer].points * 10)
    }},
    effectDescription() { // Optional text to describe the effects
        eff = this.effect();
        eff.waffleBoost = eff.waffleBoost.times(buyableEffect(this.layer, 11).first)
        return "which are boosting waffles by "+format(eff.waffleBoost)+" and increasing the Ice Cream cap by "+format(eff.icecreamCap)
    },
    
})