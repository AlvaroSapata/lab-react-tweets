// function ProfileImage( props) {
//   return (<img src={props.image} className="profile" alt="profile" />);
// }

// Destructurado

function ProfileImage({ image }) {
  return <img src={image} className="profile" alt="profile" />;
}

export default ProfileImage;
