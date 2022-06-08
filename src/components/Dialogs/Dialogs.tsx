import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { Message } from "./Message/Message";

export const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Lama Iliya" },
    { id: 2, name: "Lama Mama" },
    { id: 3, name: "Lama Papa" },
    { id: 4, name: "Lama Ira" },
    { id: 5, name: "Lama Egor" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Where are you?" },
    { id: 3, message: "OK!" },
    { id: 4, message: "See you later!" },
    { id: 5, message: "Bye!" },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};
