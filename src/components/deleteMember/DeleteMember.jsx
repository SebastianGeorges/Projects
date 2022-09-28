import React, { useEffect, useState } from "react";
import MyButton from "../../components/buttons/MyButton";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { deleteMember } from "../../redux/actions/members/deleteMember";

const DeleteMembers = ({deleteMemberById, memberIdProps, setMemberIdProps}) => {
  
  const dispatch = useDispatch()
  const [memberId, setMemberId] = useState('');
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);

  useEffect(() => {
    setMemberId(memberIdProps);
  }, [memberIdProps, setMemberIdProps ]);


  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h3>Delete selected member</h3>
      <MyButton disabled={memberId.length > 0 ? false : true} style={{ color: "red" }} type="submit" variant="outlined" onClick={() => dispatch(deleteMember(memberId, accessToken))}>
        Delete
      </MyButton>
      
    </Box>
  );
};
export default DeleteMembers;