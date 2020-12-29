addLayer("q", {
  name: "Quests", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "📜", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0),
    };
  },
  tabFormat: [["infobox", "a"], ["row", [["clickable", 11, () => { background: (getClickableState(this.layer, 11)) ? "green": "white"}],
                                 ["clickable", 12, () => { background: (getClickableState(this.layer, 12)) ? "green": "white"}],
                                  ["clickable", 13, () => { background: (getClickableState(this.layer, 13)) ? "green": "white"}]]],
             ],
  color: "#bc0ee3",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Quests", // Name of prestige currency
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
    rows: 100,
    cols: 100,
    11: {
      display() {
        if (!getClickableState(this.layer, this.id))
        return `<h2>Strength is Power<h2> <br> <h4>Gain 15 Strength!<h4> <br> <h4>Reward: 50 Tokens`;
        else if (getClickableState(this.layer, this.id))
          return `<h2>Strength is Power<h2> <br> <h4>Gain 15 Strength!<h4> <br> <h4>Finished<h4>`;
      },
      unlocked() {
        return true
      },
      style() {
        if (getClickableState(this.layer, this.id)) 
        return {'background-color': "lime"};
        else if (!getClickableState(this.layer, this.id))
        return {'background-color': "#ff675c"};
      },
      canClick() {
        return player.s.points.gte(15) && !getClickableState(this.layer, this.id)
      },
      onClick() {
        setClickableState(
          this.layer,
          this.id,
          1,
        );
        return player.points = player.points.add(50)
      }
    },
    12: {
      display() {
        if (!getClickableState(this.layer, this.id))
        return `<h2>Endurance is a Shield<h2> <br> <h4>Gain 30 Endurance!<h4> <br> <h4>Reward: 100 Tokens`;
        else if (getClickableState(this.layer, this.id))
          return `<h2>Endurance is a Shield<h2> <br> <h4>Gain 30 Endurance!<h4> <br> <h4>Finished<h4>`;
      },
      unlocked() {
        return getClickableState(this.layer, 11)
      },
      style() {
        if (getClickableState(this.layer, this.id)) 
        return {'background-color': "lime"};
        else if (!getClickableState(this.layer, this.id))
        return {'background-color': "#ff675c"};
      },
      canClick() {
        return player.e.points.gte(30) && !getClickableState(this.layer, this.id)
      },
      onClick() {
        setClickableState(
          this.layer,
          this.id,
          1,
        );
        return player.points = player.points.add(100)
      }
    },
    13: {
      display() {
        if (!getClickableState(this.layer, this.id))
        return `<h2>Psychic is Magic<h2> <br> <h4>Gain 50 Psychic!<h4> <br> <h4>Reward: 150 Tokens`;
        else if (getClickableState(this.layer, this.id))
          return `<h2>Psychic is Magic<h2> <br> <h4>Gain 50 Psychic!<h4> <br> <h4>Finished<h4>`;
      },
      unlocked() {
        return getClickableState(this.layer, 12)
      },
      style() {
        if (getClickableState(this.layer, this.id)) 
        return {'background-color': "lime"};
        else if (!getClickableState(this.layer, this.id))
        return {'background-color': "#ff675c"};
      },
      canClick() {
        return player.p.points.gte(50) && !getClickableState(this.layer, this.id)
      },
      onClick() {
        setClickableState(
          this.layer,
          this.id,
          1,
        );
        return player.points = player.points.add(150)
      }
    }
  },
  infoboxes: {
    a: {
        title: "Quests",
        body() {
          return `Hello, I am Five, your Quest Giver. <br> I will hand you quests below, bring them in for huge rewards! These rewards can give more stats! Goodluck.` },
    }
},
  row: "side", // Row the layer is in on the tree (0 is the first row)
  layerShown() {
    return true;
  }
});
