addLayer("s", {
  branches: ["r"],
  name: "Strength", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "👊", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0),
      best: new Decimal(0)
    };
  },
  update(diff){if (player[this.layer].points.gte(player[this.layer].best)) player[this.layer].best=player[this.layer].points},
  tabFormat: ["main-display", "clickables", "buyables"],
  color: "#cf0000",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Strength", // Name of prestige currency
  baseResource: "points", // Name of resource prestige is based on
  baseAmount() {
    return player.points;
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
  clickables: {
    rows: 1,
    cols: 2,
    11: {
      canClick() {
        return !checkCooldown("s");
      },
      onClick() {
        setCooldown("s", 1000);
        return (player.s.points = player.s.points.add(
          buyableEffect(this.layer, 11)
        ));
      },
      display() {
        return `<h2>Gain Strength<h2>`;
      }
    }
  },
  buyables: {
    rows: 1,
    cols: 1,
    11: {
      title: "Stat Boost",
      cost() {
        return new Decimal(2)
          .pow(getBuyableAmount(this.layer, this.id))
          .times(100);
      },
      buy() {
        player.points = new Decimal(player.points).sub(this.cost());
        setBuyableAmount(
          this.layer,
          11,
          new Decimal(getBuyableAmount(this.layer, 11)).add(1)
        );
      },
      canAfford() {
        return new Decimal(player.points).gte(this.cost());
      },
      display() {
        return `Multiply your Strength Gain <br> 
        Cost ${format(this.cost().round())} <br>
        Effect ${format(this.effect().round())}`;
      },
      effect() {
        return new Decimal(2)
          .pow(getBuyableAmount(this.layer, this.id))
          .times(1);
      }
    }
  },
  row: 0, // Row the layer is in on the tree (0 is the first row)
  layerShown() {
    return true;
  }
});

addLayer("e", {
  name: "Endurance", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "🛡️", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0),
      best: new Decimal(0)
    };
  },
  update(diff){if (player[this.layer].points.gte(player[this.layer].best)) player[this.layer].best=player[this.layer].points},
  tabFormat: ["main-display", "clickables", "buyables"],
  color: "#00cf75",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Endurance", // Name of prestige currency
  baseResource: "points", // Name of resource prestige is based on
  baseAmount() {
    return player.points;
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
  clickables: {
    rows: 1,
    cols: 2,
    11: {
      canClick() {
        return !checkCooldown("e");
      },
      onClick() {
        setCooldown("e", 1000);
        return (player.e.points = player.e.points.add(
          buyableEffect(this.layer, 11)
        ));
      },
      display() {
        return `<h2>Gain Endurance<h2>`;
      }
    }
  },
  buyables: {
    rows: 1,
    cols: 1,
    11: {
      title: "Stat Boost",
      cost() {
        return new Decimal(2)
          .pow(getBuyableAmount(this.layer, this.id))
          .times(100);
      },
      buy() {
        player.points = new Decimal(player.points).sub(this.cost());
        setBuyableAmount(
          this.layer,
          11,
          new Decimal(getBuyableAmount(this.layer, 11)).add(1)
        );
      },
      canAfford() {
        return new Decimal(player.points).gte(this.cost());
      },
      display() {
        return `Multiply your Endurance Gain <br> 
        Cost ${format(this.cost().round())} <br>
        Effect ${format(this.effect().round())}`;
      },
      effect() {
        return new Decimal(2)
          .pow(getBuyableAmount(this.layer, this.id))
          .times(1);
      }
    }
  },
  row: 0, // Row the layer is in on the tree (0 is the first row)
  layerShown() {
    return true;
  }
});

addLayer("p", {
  name: "Psychic", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "🔮", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0),
      best: new Decimal(0)
    };
  },
  tabFormat: ["main-display", "clickables", "buyables"],
  color: "#bc0ee3",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Psychic", // Name of prestige currency
  baseResource: "points", // Name of resource prestige is based on
  baseAmount() {
    return player.points;
  }, // Get the current amount of baseResource
  type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent: 0.5, // Prestige currency exponent
  gainMult() {
    // Calculate the multiplier for main currency from bonuses
    mult = new Decimal(1);
    mult = mult.times(buyableEffect(this.layer, 11));
    return mult;
  },
  gainExp() {
    // Calculate the exponent on main currency from bonuses
    return new Decimal(1);
  },
  update(diff) {
    if (player.tab != this.layer) {
      setClickableState(this.layer, 12, false);
    }
    if (player[this.layer].points.gte(player[this.layer].best)) player[this.layer].best=player[this.layer].points
    if (this.clickables[0].canClick() && getClickableState("p", 12))
      this.clickables[0].onClick();
  },
  clickables: {
    rows: 1,
    cols: 2,
    0: {
      canClick() {
        return !checkCooldown("p");
      },
      onClick() {
        setCooldown("p", 1000);
        return (player.p.points = player.p.points.add(
          buyableEffect(this.layer, 11)
        ));
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
        if (getClickableState("p", 12))
          return `<h2> Auto Gain Psychic<h2> <br>
        <h3>True<h3>`;
        return `<h2> Auto Gain Psychic<h2> <br>
        <h3>False<h3>`;
      },
      buy() {
        player.p.points = new Decimal(player.p.points).sub(this.cost());
        setBuyableAmount(
          this.layer,
          11,
          new Decimal(getBuyableAmount(this.layer, 11)).add(1)
        );
      }
    }
  },
  buyables: {
    rows: 1,
    cols: 1,
    11: {
      title: "Stat Boost",
      cost() {
        return new Decimal(2)
          .pow(getBuyableAmount(this.layer, this.id))
          .times(100);
      },
      buy() {
        player.points = new Decimal(player.points).sub(this.cost());
        setBuyableAmount(
          this.layer,
          11,
          new Decimal(getBuyableAmount(this.layer, 11)).add(1)
        );
      },
      canAfford() {
        return new Decimal(player.points).gte(this.cost());
      },
      display() {
        return `Multiply your Psychic Gain <br> 
        Cost ${format(this.cost().round())} <br>
        Effect ${format(this.effect().round())}`;
      },
      effect() {
        return new Decimal(2)
          .pow(getBuyableAmount(this.layer, this.id))
          .times(1);
      }
    }
  },
  row: 0, // Row the layer is in on the tree (0 is the first row)
  layerShown() {
    return true;
  }
})
