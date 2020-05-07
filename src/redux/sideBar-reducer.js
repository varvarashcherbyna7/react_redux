
let initialState = {
    friends: [
        {id: 1, name: 'Maryna', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY6EIXPWwJEQjHcszeCrXCP6Krepz-94sJKXzzWBFVedmbxe3J&usqp=CAU'},
        {id: 2, name: 'Artem', ava: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png'},
        {id: 3, name: 'Alina', ava: 'https://d2te1y9qx21itc.cloudfront.net/images/home-2018/home-school/parents-avatar.png'}
    ]
};

const sideBarReducer = (state = initialState, action) => {
    return state
};

export default sideBarReducer;