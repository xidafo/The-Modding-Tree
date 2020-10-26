addLayer("w", {
    name: "Wood", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🌳", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#734c29",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Wood", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "Reset for wood", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("p", {
    name: "planks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#a67041",
    requires: new Decimal(1e3), // Can be a function that takes requirement increases into account
    resource: "Planks", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["w"],
    hotkeys: [
        {key: "P", description: "Reset for planks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("s", {
    name: "sticks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: " 🥢", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#bf834e",
    requires: new Decimal(1e5), // Can be a function that takes requirement increases into account
    resource: "Sticks", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    branches: ["w", 'p'],
    hotkeys: [
        {key: "s", description: "Reset for sticks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("cs", {
    name: "Cobblestone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🪨", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#595959",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "cobblestone", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    branches: ["cs", 'w'],
    hotkeys: [
        {key: "c", description: "Reset for cobblestone", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("io", {
    name: "iron ore", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "IO", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#bf834e",
    requires: new Decimal(1e5), // Can be a function that takes requirement increases into account
    resource: "iron ore", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    branches: ["cs"],
    hotkeys: [
        {key: "i", description: "Reset for iron", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("i", {
    name: "iron ingot", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "II", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#bf834e",
    requires: new Decimal(1e5), // Can be a function that takes requirement increases into account
    resource: "iron ingot", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["io"],
    hotkeys: [
        {key: "i", description: "Reset for iron", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("go", {
    name: "Gold", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "GO", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#595959",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "gold ore", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    branches: ["io", 'i'],
    hotkeys: [
        {key: "g", description: "Reset for gold", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("g", {
    name: "Gold ingot", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "GI", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#595959",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "gold ingot", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["go"],
    hotkeys: [
        {key: "g", description: "Reset for gold", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("d", {
    name: "Diamond", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "💎", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 5, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#595959",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "Diamond", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    branches: ["go", 'g'],
    hotkeys: [
        {key: "d", description: "Reset for Diamond", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("o", {
    name: "Obsidian", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 5, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#595959",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "Obsidian", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["d"],
    hotkeys: [
        {key: "0", description: "Reset for Obsidian", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("n", {
    name: "Netherite", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 6, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#595959",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "Netherite", // Name of prestige currency
    baseResource: "Blocks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    branches: ['d','o'],
    hotkeys: [
        {key: "n", description: "Reset for Netherite", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

// crafting recepies
addLayer("a", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    resource: "crafting recipies", 
    row: "side",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Crafting recipies")
    },
})
// ghost layers ignore
addLayer("aaa", {
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    type: "none",
    row: 3,
    layerShown: "ghost",
}, 
)
addLayer('aaaa', {
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    type: "none",
    row: 4,
    layerShown: "ghost",
}, 
)
addLayer('aaaa', {
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    type: "none",
    row: 1,
    layerShown: "ghost",
}, 
)
addLayer('aaaa', {
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    type: "none",
    row: 2,
    layerShown: "ghost",
}, 
)