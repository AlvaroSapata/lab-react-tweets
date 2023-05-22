import ProfileImage from "../components/ProfileImage.js";
import User from "../components/User.js";
import Timestamp from "../components/Timestamp.js";
import Message from "../components/Message.js";
import Actions from "../components/Actions.js";

// function Tweet(props) {
// const {  timestamp, message } = props.tweet;
// const { name, image, handle } = props.tweet.user;

console.log(User);

// Destructuramos directamente props
function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;
  const { image } = user;

  console.log(tweet);

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={user} />
          </span>

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
