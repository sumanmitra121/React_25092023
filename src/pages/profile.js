import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userProfile';
const Profile = () => {
          const { user } = useContext(UserContext);
          console.log(`USER_DTLS: ${user}`);

          // if (user) {
          //           return <b className="w-full flex items-center justify-center text-green-800">
          //                     {user.user_id} Logged In</b>
          // }
          // else {
          //           return <b className="w-full flex items-center justify-center text-rose-800">Not Logged In</b>
          // }

          return (

                    <>
                              <b className={`w-full flex items-center justify-center ${!user ? 'text-rose-800' : 'text-green-800'}`}>
                                        {!user ? 'Not Logged In' : `${user.user_id} Logged In`}
                              </b>
                    </>

          )



}

export default Profile;
