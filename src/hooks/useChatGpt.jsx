import { useState } from 'react';

function useChatGpt() {
    const [isTyping, setIsTyping] = useState(false);
    const API_KEY = process.env.REACT_APP_CHAT_GPT_API_KEY;

    const [messages, setMessages] = useState([
      {
        message: "Hello, I'm ChatGPT! Ask me anything!",
        sentTime: "just now",
        sender: "ChatGPT",
      },
    ]);

    const sendQuestion = async (questionMessage) => {
        const newMessage = {
          message: questionMessage,
          direction: 'outgoing',
          sender: "user",
        };
    
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsTyping(true);
    
        try {
          const response = await processMessageToChatGPT([...messages, newMessage]);
          const content = response.choices[0]?.message?.content;
          if (content) {
            const chatGPTResponse = {
              message: content,
              sender: "ChatGPT",
            };
            setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
          }
        } catch (error) {
          console.error("Error processing message:", error);
        } finally {
          setIsTyping(false);
        }
      };
    
      async function processMessageToChatGPT(chatMessages) {
        const apiMessages = chatMessages.map((messageObject) => {
          const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
          return { role, content: messageObject.message };
        });
    
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            { role: "system", content: "I'm a Student using ChatGPT for learning" },
            ...apiMessages,
          ],
        };
       
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        });

        console.log(response);
    
        return response.json();
      }
    
    return [messages, sendQuestion];
}

export default useChatGpt;