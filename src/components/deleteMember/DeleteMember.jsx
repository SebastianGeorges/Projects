import React, { useEffect, useState } from "react";
import MyButton from "../../components/buttons/MyButton";
import { Box } from "@mui/system";
import { deleteMember } from "../../redux/actions/members/deleteMember";
import { useDispatch, useSelector } from "react-redux";


const DeleteMembers = ({deleteMemberById, memberIdProps, setMemberIdProps}) => {
  const dispatch = useDispatch();
  const hasErrors = useSelector((state) => state?.memberState?.hasErrors);
  const loading = useSelector((state) => state?.memberState?.loading);

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
      <MyButton disabled={memberId.length > 0 ? false : true} style={{ color: "red" }} type="submit" variant="outlined" onClick={() => dispatch(deleteMember(memberId, accessToken))
       }>
        Delete
      </MyButton>
      {hasErrors?.status ? alert(hasErrors?.message) : null}
    </Box>
  );
};
export default DeleteMembers;