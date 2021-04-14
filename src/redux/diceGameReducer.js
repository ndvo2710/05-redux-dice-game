const defaultState = {
  isLow: true, // low (3-11) and high (>11)
  diceArray: [
    { face: 1, img: "./img/1.png" },
    { face: 3, img: "./img/3.png" },
    { face: 5, img: "./img/5.png" }
  ],
  winScore: 0,
  totalGame: 0
};

const diceGameReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default diceGameReducer;
