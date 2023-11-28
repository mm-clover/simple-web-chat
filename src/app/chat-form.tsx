"use client";

import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { storeInLocalStorage } from './helper';
import moment from 'moment';
import { chatReducer } from './chat-reducer';
import ChatList from './chat';

type Props = {
    username: string
}

export default function ChatForm({ username }: Props) {
    const [message, setMessage] = useState('')
    const [chats, dispatchChats] = React.useReducer(
        chatReducer,
        { data: [], checkNew: false }
    );

    useEffect(() => {
        dispatchChats({ type: 'GET_MESSAGES' });
    }, [chats.checkNew])


    const handleMessageEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleSendMessage = () => {
        let chatMessage = { username, message, createdAt: moment() }
        storeInLocalStorage("messages", JSON.stringify(chatMessage))
        dispatchChats({
            type: "ADD_MESSAGE",
            payload: chatMessage
        })
    }

    return (
        <div>
            <ChatList username={username} chats={chats.data}/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleMessageEvent} />
            <Button variant="contained" onClick={handleSendMessage}>Send</Button>
        </div>
    );
}