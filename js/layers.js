
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
        let mult = new Decimal(1)
        if (hasUpgrade(this.layer, 11)) mult = mult.times(2)
        if (hasUpgrade(this.layer, 14)) mult = mult.times(upgradeEffect(this.layer, 14))
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
    upgrades : {
        rows : 1,
        cols : 4,
        11 : {
            title: 'punches are twice as strong',
            description: "get twice as much wood per munch",
            cost: new Decimal(1),
            unlocked() {return true},
        },
        12: {
            title: 'wood somehow makes blocks?',
            description: "Multiply block gain baised on wood",
            cost: new Decimal(1),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = player[this.layer].points.add(1).pow(0.15).mul(1.25)
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: 'blocks make more blocks?',
            description: 'multiply block gain by blocks',
            cost: new Decimal(4),
            unlocked() {return player.w.points.gte(3)},
            effect() {
                if(player.points.lessThan(1)) return 1
                let ret = player.points.log(9).times(1.67).pow(0.8)
                return ret;
            },
        },
        14:{
            title: 'blocks make you punch harder?',
            description: 'multiply wood gain by blocks',
            cost: new Decimal(8),
            unlocked() {return hasUpgrade(this.layer, 13)},
            effect() {
                if(player.points.lessThan(1)) return 1
                let ret = player.points.log(5).pow(0.2).times(1.4)
                return ret
            },
        },
    },
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
    requires: new Decimal(200), // Can be a function that takes requirement increases into account
    resource: "Planks", // Name of prestige currency
    baseResource: "Wood", // Name of resource prestige is based on
    baseAmount() {return player.w.points}, // Get the current amount of baseResource
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
    branches: ['p'],
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
    color: '#CBCDCD',
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
    color: "#E6E7E8",
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
    color: "#cf7500",
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
    color: "#f0a500",
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
    color: "#40a8c4",
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
    color: "#221f3b",
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
    color: "#003366",
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

addLayer("r", {
    name: "Redstone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 6, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#e60000",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "Redstone", // Name of prestige currency
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
    branches: ['i','g'],
    hotkeys: [
        {key: "r", description: "Reset for Redstone", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("l", {
    name: "Lapis", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#6600CC",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "Lapis", // Name of prestige currency
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
    branches: ['i','g'],
    hotkeys: [
        {key: "l", description: "Reset for Lapis", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

// crafting recepies
addLayer("cr", {
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
    achievements: {
        rows: 1,
        cols: 3,
        11: {
            name: "planks",
            done() {return [player.w.points.gte(4)]},
            goalTooltip: "complete wood chalenge 4 times", // Shows when achievement is not completed
            doneTooltip: '4 wood chalenge completions', // Showed when the achievement is completed
        },
        12: {
            name: "sticks",
            done() {return [player.p.points.gte(2)]},
            goalTooltip: "complete planks chalenge 4 times", // Shows when achievement is not completed
            doneTooltip: '2 planks chalenge completions', // Showed when the achievement is completed
        },
        13: {
            name: "wooden pickaxe",
            done() {return [player.w.points.gte(7)]},
            goalTooltip: "complete wood chalenge 7 times and stick chalenge 3 times", // Shows when achievement is not completed
            doneTooltip: 'stone?', // Showed when the achievement is completed
        },
    },
    midsection: [
        "achievements",
    ]
},
)

// ghost layers ignore
addLayer("aaa", {
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
addLayer('aaaaa', {
    position: 9,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    type: "none",
    row: 2,
    layerShown: "ghost",
}, 
)
addLayer('aaaaaa', {
    position: 9,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    type: "none",
    row: 1,
    layerShown: "ghost",
}, 
)
addLayer('aaaaaaa', {
    position: 10,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    type: "none",
    row: 2,
    layerShown: "ghost",
}, 
)