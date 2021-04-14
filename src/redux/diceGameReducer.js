const defaultState = {
  isLow: true, // low (3-11) and high (>11)
  diceArray: [
    { value: 1, img: "./img/1.png" },
    { value: 4, img: "./img/4.png" },
    { value: 5, img: "./img/5.png" }
  ],
  winScore: 0,
  totalGame: 0
};

const diceGameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "BETTING":
      state.isLow = action.isLow;
      return { ...state };
    case "PLAY_GAME":
      // Roll dice
      const diceArray = [];
      for (let i = 0; i < 3; i++) {
        const rand1To6 = Math.floor(Math.random() * 6) + 1;
        diceArray.push({
          value: rand1To6,
          img: `./img/${rand1To6}.png`
        });
      }
      state.diceArray = diceArray;
      state.totalGame += 1;
      const diceSum = diceArray.reduce((totalSum, dice, index) => {
        return totalSum + dice.value;
      }, 0);
      console.log("diceSum", diceSum);
      if ((diceSum > 11 && !state.isLow) || (diceSum <= 11 && state.isLow)) {
        state.winScore += 1;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default diceGameReducer;
