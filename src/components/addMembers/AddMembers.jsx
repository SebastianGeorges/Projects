import React, { useState, useEffect } from "react";
import MyInput from "../../components/buttons/MyInput";
import MyButton from "../../components/buttons/MyButton";
import { Setter } from "../../utils/Setter";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../../redux/actions/members/addMember.js";

function AddMembers() {
  const dispatch = useDispatch();
  const hasErrors = useSelector((state) => state?.membersState?.hasErrors);
  const loading = useSelector((state) => state?.membersState?.loading);

  const [firstName, setFirstName] = useState(
    window.localStorage.getItem("first")
  );
  const [lastName, setLastName] = useState(window.localStorage.getItem("last"));
  const [email, setEmail] = useState(window.localStorage.getItem("email"));
  const [position, setPosition] = useState(
    window.localStorage.getItem("position")
  );
  const [linkedIn, setLinkedIn] = useState(
    window.localStorage.getItem("linkedIn")
  );
  const [facebook, setFacebook] = useState(
    window.localStorage.getItem("facebook")
  );
  const [avatar, setAvatar] = useState(window.localStorage.getItem("avatar"));
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);

  useEffect(() => {
    console.log("has errors: ",hasErrors)
  },[hasErrors])

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="Email">Email</label>
        <MyInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => Setter(e, setEmail, "email")}
          value={email?.length > 0 ? email : ""}
        />
        <label htmlFor="FirstName">First Name</label>
        <MyInput
          type="text"
          id="FirstName"
          name="FirstName"
          placeholder="First Name"
          onChange={(ef) => Setter(ef, setFirstName, "first")}
          value={firstName?.length > 0 ? firstName : ""}
        />
        <label htmlFor="LastName">Last Name</label>
        <MyInput
          type="text"
          id="LastName"
          name="LastName"
          placeholder="Last Name"
          onChange={(el) => Setter(el, setLastName, "last")}
          value={lastName?.length > 0 ? lastName : ""}
        />
        <label htmlFor="position">Position</label>
        <MyInput
          type="text"
          id="position"
          name="position"
          placeholder="Position"
          onChange={(event) => Setter(event, setPosition, "position")}
          value={position?.length > 0 ? position : ""}
        />
        <label htmlFor="linkedIn">LinkedIn</label>
        <MyInput
          type="text"
          id="linkedIn"
          name="linkedIn"
          placeholder="linkedIn"
          onChange={(eli) => Setter(eli, setLinkedIn, "linkedIn")}
          value={linkedIn?.length > 0 ? linkedIn : ""}
        />
        <label htmlFor="facebook">Facebook</label>
        <MyInput
          type="tel"
          id="facebook"
          name="facebook"
          placeholder="Facebook"
          onChange={(efb) => Setter(efb, setFacebook, "facebook")}
          value={facebook?.length > 0 ? facebook : ""}
        />
        <label htmlFor="avatar">Avatar</label>
        <MyInput
          type="text"
          id="avatar"
          name="avatar"
          placeholder="Add an avatar base64"
          onChange={(ea) => Setter(ea, setAvatar, "avatar")}
          value={avatar?.length > 0 ? avatar : ""}
        />
      </form>
      <MyButton
        type="submit"
        onClick={() =>
          dispatch(
            addMember(
              email,
              position,
              firstName,
              lastName,
              linkedIn,
              facebook,
              avatar,
              accessToken
            )
          )
        }
        disabled={false}
      >
        Add member
      </MyButton>
      {hasErrors?.status ? (<p style={{color: "#ff0000"}}>{hasErrors?.message}</p>) : null}
    </>
  );
}

export default AddMembers;
