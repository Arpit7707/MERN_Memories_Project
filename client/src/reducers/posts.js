//a reducer is a function that accepts the state variable and also accepts the action
//then based on action type we perform some logic(handling actions)

//in reducers the state always needs to be equal to something, it can't be equal to nothing,
//so we set some initial value

//state is gonna be posts coz its posts reducer

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return state;
//     case "CREATE":
//       return state;
//     default:
//       break;
//   }
// };

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      //action.payload are actually our posts
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
