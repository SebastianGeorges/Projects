import React from 'react'
import MyButton from '../../components/buttons/MyButton'
import MyInput from '../../components/buttons/MyInput'
import { Grid } from '@mui/material'




const MyProfile = () => {
return (
    <Grid container style={{ marginTop: 50 }}>
    <Grid item xs={6}>
    <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
    <MyInput
    type="email"
          id="email"
          name="email"
          placeholder="Email"
          disabled/>
    <MyInput 
    type="text"
    id="FirstName"
    name="FirstName"
    placeholder="First Name"/>
    <MyInput type="text"
    id="LastName"
    name="LastName"
    placeholder="Last Name"/>
    </form>
    <MyButton>SaveS</MyButton>

</Grid>
<Grid item xs={6}>
        <MyButton>EDIT</MyButton>
    </Grid>
    </Grid>
)
}

export default MyProfile