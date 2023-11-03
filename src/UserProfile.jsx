import "./styles.css";

const UserProfile = (props) => {
  console.log(props);

  return (
    <>
      <div className="main">
        <div>
          <h1>{props.name}</h1>
          <h2>{props.title}</h2>
          <div>
            {props.skillsets.map((skill, index) => (
              <div className="skills">{skill}</div>
            ))}
          </div>
        </div>
        <img src={props.avatar_url} />
      </div>
    </>
  );
};
export default UserProfile;
