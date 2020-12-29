addLayer("r", {
  name: "The Rock", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "🗿", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0)
    };
  },
  tabFormat: ["resource-display", ["infobox", "b"], "clickables", "buyables"],
  color: "#8f8f8f",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Rock", // Name of prestige currency
  baseResource: "strength", // Name of resource prestige is based on
  baseAmount() {
    return player.s.points;
  }, // Get the current amount of baseResource
  type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent: 0.5, // Prestige currency exponent
  gainMult() {
    // Calculate the multiplier for main currency from bonuses
    mult = new Decimal(1);
    return mult;
  },
  gainExp() {
    // Calculate the exponent on main currency from bonuses
    return new Decimal(1);
  },
  infoboxes: {
    b: {
        title: "What Is This?",
        body() {
          return `This is a Training Area, you can get many of these. These will boost a certain stat of what ability it is connected to.` },
    }
},
  clickables: {
    rows: 1,
    cols: 2,
    11: {
      canClick() {
        return !checkCooldown("s");
      },
      onClick() {
        setCooldown("s", 1000);
        return (player.s.points = player.s.points.add(buyableEffect("s", 11).times(3)));
      },
      display() {
        return `<h2>Train at the Rock<h2> <br> <h4>x3 Strength<h4>`;
      }
    }
  },
  row: 1, // Row the layer is in on the tree (0 is the first row)
  layerShown() {
    return player.s.best.gte(100);
  }
});

addLayer("h", {
  branches: ["e"],
  name: "The Hospital", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "🏥", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0)
    };
  },
  tabFormat: ["resource-display", ["infobox", "b"], "clickables", "buyables"],
  color: "##ffffff",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Hospital", // Name of prestige currency
  baseResource: "endurance", // Name of resource prestige is based on
  baseAmount() {
    return player.e.points;
  }, // Get the current amount of baseResource
  type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent: 0.5, // Prestige currency exponent
  gainMult() {
    // Calculate the multiplier for main currency from bonuses
    mult = new Decimal(1);
    return mult;
  },
  gainExp() {
    // Calculate the exponent on main currency from bonuses
    return new Decimal(1);
  },
  infoboxes: {
    b: {
        title: "What Is This?",
        body() {
          return `This is a Training Area, you can get many of these. These will boost a certain stat of what ability it is connected to.` },
    }
},
  clickables: {
    rows: 1,
    cols: 2,
    11: {
      canClick() {
        return !checkCooldown("e");
      },
      onClick() {
        setCooldown("e", 1000);
        return (player.e.points = player.e.points.add(buyableEffect("e", 11).times(3)));
      },
      display() {
        return `<h2>Train at the Hospital<h2> <br> <h4>x3 Endurance<h4>`;
      }
    }
  },
  row: 1, // Row the layer is in on the tree (0 is the first row)
  layerShown() {
    return player.e.best.gte(100);
  }
});

addLayer("l", {
  branches: ["p"],
  name: "The Library", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "📖", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0)
    };
  },
  tabFormat: ["resource-display", ["infobox", "b"], "clickables", "buyables"],
  color: "#65d656",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Library", // Name of prestige currency
  baseResource: "psychic", // Name of resource prestige is based on
  baseAmount() {
    return player.p.points;
  }, // Get the current amount of baseResource
  type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent: 0.5, // Prestige currency exponent
  gainMult() {
    // Calculate the multiplier for main currency from bonuses
    mult = new Decimal(1);
    return mult;
  },
  gainExp() {
    // Calculate the exponent on main currency from bonuses
    return new Decimal(1);
  },
  infoboxes: {
    b: {
        title: "What Is This?",
        body() {
          return `This is a Training Area, you can get many of these. These will boost a certain stat of what ability it is connected to.` },
    }
},
  update(diff) {
    if (player.tab != this.layer) {
      setClickableState(this.layer, 12, false);
    }
    if (this.clickables[0].canClick() && getClickableState("l", 12))
      this.clickables[0].onClick();
  },
  clickables: {
    rows: 1,
    cols: 2,
    0: {
      canClick() {
        return !checkCooldown("l");
      },
      onClick() {
        setCooldown("l", 1000);
        return (player.p.points = player.p.points.add(buyableEffect("p", 11).times(3)));
      },
      display() {
        return `Hello, this is a test`;
      }
    },
    12: {
      onClick() {
        setClickableState(
          this.layer,
          this.id,
          !getClickableState(this.layer, this.id)
        );
      },
      canClick() {
        return true;
      },
      display() {
        if (getClickableState("l", 12))
        return `<h2> Auto Gain Psychic<h2> <br> <br> <h3>True<h3> <br> <h4>x3 Psychic<h4>`;
        return `<h2> Auto Gain Psychic<h2> <br> <br> <h3>False<h3> <br> <h4>x3 Psychic<h4>`;
      },
    }
  },
  row: 1, // Row the layer is in on the tree (0 is the first row)
  layerShown() {
    return player.p.best.gte(100);
  }
});