"use client";

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ChatForm from './chat-form';
import { storeInLocalStorage } from './helper';

export default function UserFormDialog() {
    const [open, setOpen] = useState(true);
    const [username, setUsername] = useState('')


    const handleSubmit = () => {
        storeInLocalStorage("usernames", username);
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNameEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
                <DialogTitle>Please enter your name!</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your Name"
                        type="name"
                        fullWidth
                        variant="standard"
                        onChange={handleNameEvent}
                        onKeyDown={e => e.key === 'Enter' ? handleSubmit() : ''}
                        data-testid="username-input"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Enter to the chart</Button>
                </DialogActions>
            </Dialog>
            {username && !open && <div>
                <ChatForm username={username} />
            </div>}
        </>
    );
}
