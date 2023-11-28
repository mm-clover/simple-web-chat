"use client";

import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { CardContent } from '@mui/material';

type Props = {
    username: string,
    chats: any;
}

export default function ChatList({ username, chats }: Props) {

    return (
        <CardContent>
            <h4>Welcome to my SIMPLE WEB CHAT</h4>
            <List sx={{ width: '100%', minWidth: 500, bgcolor: 'background.paper' }}>
                {
                    chats.map((message: any, index: number) => {
                        let item = typeof message === 'string' ? JSON.parse(message) : message
                        let checkCurrentUser = item.username === username
                        return checkCurrentUser ? <ListItem key={index} style={{ textAlign: 'right' }}>
                            <ListItemText primary={item.username} secondary={item.message} />
                            <ListItemAvatar style={{ marginLeft: '20px' }}>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItem> : <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.username} secondary={item.message} />
                        </ListItem>
                    })
                }
            </List>
        </CardContent>
    );
}