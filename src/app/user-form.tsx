"use client";

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function UserFormDialog() {
    const [open, setOpen] = useState(true);
    const [username, setUsername] = useState('')

    const storeUsername = (username: string) => {
        let usernames = localStorage.getItem("usernames")
        if (usernames) {
            localStorage.setItem("usernames", JSON.stringify([...JSON.parse(usernames), name]))
        } else {
            localStorage.setItem("usernames", JSON.stringify([username]))
        }
    }

    const handleSubmit = () => {
        storeUsername(username);
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Enter to the chart</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
