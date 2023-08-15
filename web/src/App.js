import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material';
import Person from '@mui/icons-material/Person';
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
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Typography sx={{ fontSize: 28, fontWeight: 'bold' }}>Version 1.5</Typography>
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

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mb: 2 }}>
                {messages.map((msg) => (
                    <>
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary='Anonymous'
                                secondary={(
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        {msg.content}
                                    </Typography>
                                )}
                            />
                        </ListItem>
                        <Divider variant='inset' component='li' />
                    </>
                ))}
            </List>
        </Box>
    );
}

export default App;
