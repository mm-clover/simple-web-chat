"use client";

import React,{useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

type Props = {
    username: string,
    chats: any;
}

export default function ChatList({ username, chats }: Props) {    

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {username}
            {
                chats.map((message: any, index: number) => {
                    let item = typeof message === 'string' ? JSON.parse(message) : message
                    return <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>{item.username}
                        </ListItemAvatar>
                        <ListItemText primary="Photos" secondary={item.message} />
                    </ListItem>
                })
            }
        </List>
    );
}