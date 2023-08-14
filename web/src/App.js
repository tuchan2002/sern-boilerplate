import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axiosClient from './utils/axios';

function App() {
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const getAllMessages = async () => {
            const response = await axiosClient.get('api/v1/messages');
            setMessages(response.data.data.messages);
        };
        getAllMessages();
    }, []);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const response = await axiosClient.post('api/v1/messages', {
            content
        });

        setMessages([...messages, response.data.data.message]);
        setContent('');
    };

    return (
        <Box
            sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Version 1.2</Typography>
            <Box component='form' onSubmit={handleSendMessage} noValidate>
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Message'
                    name='content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 2, mb: 2 }}
                    disabled={!content.trim()}
                >
                    Send
                </Button>
            </Box>

            <Box
                sx={{ marginTop: 1, width: 300}}
            >
                <Typography sx={{ fontSize: 20, fontWeight: 'medium' }}>Messages:</Typography>
                {messages.map((msg) => <Typography sx={{ typography: 'body1' }}>{`${msg.content}`}</Typography>)}
            </Box>
        </Box>
    );
}

export default App;
