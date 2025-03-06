import React from "react";
import "../App.css";

const Usercard = () => {
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="user-card">
      <img
        src={profilePhoto}
        alt="Profile"
        className="profile-photo"
      />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
      <p className="user-phone">{phone}</p>
      <p className="user-address">{address}</p>
    </div>
  );
};

export default Usercard;