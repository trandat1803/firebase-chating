import { useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = (e) => {
        setText((prev)=>prev + e.emoji);
        setOpen(false);
    }

    console.log(text);

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="avatar"/>
                    <div className="texts">
                        <span>Kei</span>
                        <p>hello, nice to meet you</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt=""/>
                    <img src="./video.png" alt=""/>
                    <img src="./info.png" alt=""/>
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" 
                placeholder="Type a message..."
                value={text} 
                onChange={e=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen((prev) => !prev)}/>
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat;