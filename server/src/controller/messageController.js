const db = require('../models');

const messageController = {
    getMessages: async (req, res) => {
        try {
            const messages = await db.Message.findAll();

            return res.status(200).json({
                message: 'Get messages successfully.',
                success: true,
                data: {
                    messages
                }
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    sendMessage: async (req, res) => {
        const { content} = req.body;

        try {
            const newMessage = {
                content
            };

            const createdMessage = await db.Message.create(newMessage);

            return res.status(201).json({
                message: 'Send message successfully.',
                success: true,
                data: {
                    message: createdMessage
                }
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
};

module.exports = messageController;
