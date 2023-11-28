"use client";

import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, TextField } from '@mui/material';
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
        setMessage('')
    }

    return (
        <Card>
            <ChatList username={username} chats={chats.data}/>
            <CardActions style={{backgroundColor: 'purple'}}>
                <TextField 
                    id="chat-input" 
                    data-testid="chat-input"
                    variant="outlined" 
                    value={message}
                    onChange={handleMessageEvent} 
                    placeholder='Enter message here ...'
                    style={{width: '80%', backgroundColor: '#fff'}}
                    onKeyDown={e => e.key === 'Enter' ? handleSendMessage() : ''}
                    required
                />
                <Button variant="contained" 
                    onClick={handleSendMessage} 
                    style={{marginLeft: '10px', backgroundColor: '#fff', color: 'purple' }}
                    disabled={message? false : true}
                >Send</Button>
            </CardActions>
        </Card>
    );
}