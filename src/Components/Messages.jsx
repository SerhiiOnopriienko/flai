import userIcon from "../media/userIcon.svg";
import giIcon from "../media/giIcon.svg";
import sendMessage from "../media/sendMessage.svg";

export default function Messages() {
  return (
    <div className="messages">
      <div className="messages-header">
        <p>Free Plan</p>
        <p>There are 10 free requests left</p>
        <div className="messages-header-buy-premium">
          <p>Buy Premium</p>
        </div>
      </div>
      <div className="messages-message">
        <div className="messages-message-header">
          <div>
            <img src={userIcon} alt="user" />
            <p>You</p>
          </div>
          <p>3m ago</p>
        </div>
        <div className="messages-message-text">
          <p>Hi GI:</p>
          <p>Could you analyze my account?</p>
          <p>https://www.tiktok.com/@im_mmxvii</p>
        </div>
      </div>
      <div className="messages-border"></div>
      <div className="messages-message">
        <div className="messages-message-header">
          <div>
            <img src={giIcon} alt="ge" />
            <p>GE</p>
          </div>
          <p>2m ago</p>
        </div>
        <div className="messages-message-text messages-message-text-ge">
          <p>
            Thank you for your authorization, your data is completely safe. For
            login, we use the official TikTok authorization method.
          </p>
          <p>Iam analyzing your account...</p>
          <p>Your account analytics is ready</p>
          <p>Shall I write you a general summary?</p>
        </div>
      </div>
      <div className="messages-input">
        <input type="text" placeholder="Enter your request..." />
        <img src={sendMessage} alt="send" />
      </div>
    </div>
  );
}
