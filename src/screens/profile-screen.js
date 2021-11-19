import React, { useContext } from 'react'
import { Box } from '../common-components';
import { useDoc } from '../Hooks/firebase';
import { AuthContext } from "../Providers/auth-provider";

export const ProfileScreen = () => {
    const { user } = useContext(AuthContext)
    const uid = user && user.uid
    const { data } = useDoc('users/' + uid)
    // data = { username, email, phonenumber, profileImg };
    console.log('data: ', data)

    if(!data) {
        return (
            <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <Box p={'20px'} >
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                <div style={{
                    width: "200px",
                    height: "200px",
                    backgroundImage: `url("${data.profileImg}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    borderRadius: '50%'
                }} />
                <Box ml={'10px'} >
                    <span>Username: </span>
                    <h1>{data.username}</h1>
                    <h1>Email: {data.email}</h1>
                    <h1>Phone number: {data.phonenumber}</h1>
                </Box>
            </Box>
        </Box>
    )
}