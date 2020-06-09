const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Varvara', ava: 'https://www.businesstyc.com/wp-content/uploads/2019/03/avataaars.png'},
        {id: 2, name: 'Oleksandr', ava:'https://imgur.com/I80W1Q0.png'},
        {id: 3, name: 'Polina', ava: 'https://www.nuclearinst.com/write/MediaUploads/avataaars.png'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hi hi hi'}
    ],
    newMessageText: ''
};

const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: text}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default: return state;
    }
};

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
};

export default dialogReducer;