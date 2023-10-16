import React, { useState, useContext } from 'react'
import UserContext from '../context/userProfile';
const Login = () => {
          const [user_id, setUserId] = useState('');
          const [password, setPassword] = useState('');
          const { setUser } = useContext(UserContext);
          const handleSubmit = () => {
                    if (user_id && password) {
                              setUser({ user_id, password })
                    }
                    setUserId('');
                    setPassword('');
          }

          return (
                    <>
                              <div className="h-50 w-full items-center p-5 flex justify-center flex-col">


                                        <div className="h-1/2 w-1/2 p-5 flex justify-center flex-col">


                                                  <label htmlFor="user_id">USER ID</label>
                                                  <input type="text"
                                                            placeholder="Enter USER ID"
                                                            className="form-control"
                                                            value={user_id}
                                                            id="user_id"
                                                            onChange={(e) => setUserId(e.target.value)}
                                                  />
                                                  <label htmlFor="password" >PASSWORD</label>
                                                  <input type="password"
                                                            placeholder="Enter PASSWORD"
                                                            className="form-control"
                                                            value={password}
                                                            id="password"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                  />
                                                  <button type="button" onClick={() => handleSubmit()}>Sign In</button>
                                        </div>
                              </div>
                    </>
          )
}

export default Login;
