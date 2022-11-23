import React from "react";
import {DialogPageStateType} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/dialogs-reducer";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: DialogPageStateType,
    isAuth: boolean
}
type mapDispatchToPropsType = {
    messageForNewMessage: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        messageForNewMessage: (text: string) => dispatch(updateNewMessageTextAC(text)),
        sendMessage: () => dispatch(sendMessageAC())

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

