import "./chat.css"

const Chat = () => {
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
                <input type="text" placeholder="Type a message..."/>
                <div className="emoji">
                    <img src="./emoji.png" alt=""/>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat;