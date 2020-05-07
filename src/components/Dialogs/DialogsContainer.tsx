// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import Dialogs from "./Dialogs";
// @ts-ignore
import {connect} from "react-redux"
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";

// const DialogsContainer = (props: { state: any, dispatch: any}) => {
//
//     let addMessage = () => {
//         props.dispatch(addMessageActionCreator())
//     };
//     let onMessageChange = (text: any) => {
//         props.dispatch(updateNewMessageTextActionCreator(text))
//     }
//
//     return <Dialogs
//         dialogs={props.state.dialogPage.dialogs}
//         messages={props.state.dialogPage.messages}
//         newMessageText={props.state.dialogPage.newMessageText}
//         addMessage={addMessage}
//         onMessageChange={onMessageChange}
//     />
// };

let mapStateToProps = (state: { dialogPage: any; }) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch: (arg0: { type: string; newMessage?: any; }) => void) => {
    return {
        onMessageChange: (text: any) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;