import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const replies = [
  'How are you?',
  'Nice to chat with you',
  'That is impressive',
  'Excuse me'
];

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '?'
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    let newMessage = 
    [
      {
        _id: messages.length + 1,
        text: replies[Math.floor(Math.random() * replies.length)],
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '?',
        },
      },
    ]
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}