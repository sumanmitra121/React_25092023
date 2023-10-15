import React, { useState, useEffect, useCallback, useRef } from 'react';

const PasswordGenerator = () => {

          const [__isNumber, setIsNumber] = useState(false);

          const [__isChar, setIsChar] = useState(false);

          const [length, setLength] = useState(8);

          const [password, setPassword] = useState('');

          const passRef = useRef(null);


          useEffect(() => {
                    callBck();
          }, [__isNumber, __isChar, length]);


          const callBck = useCallback(() => {
                    let pass = '';
                    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

                    if (__isNumber) {
                              str += "0123456789";
                    }
                    if (__isChar) {
                              str += "@!#$%^&*()~_+";
                    }

                    for (let i = 1; i <= length; i++) {
                              let char = Math.floor(Math.random()
                                        * str.length + 1);
                              pass += str.charAt(char)
                    }
                    setPassword(pass);
          }, [__isNumber, __isChar, length]);




          return (
                    <div className="
                    w-full 
                    h-screen bg-slate-800 
                    flex
                    flex-col
                    justify-center
                    items-center
                    duration-200">
                              {/* flex
                              justify-center
                              items-center
                              flex-col */}
                              <div className="
                              w-1/3 bg-slate-900 
                              shadow-sm rounded-lg ">
                                        <p className="text-white text-center  my-5 text-xl">Password Generator</p>

                                        <div className="flex shadow rounded-lg overflow-hidden mb-4 px-5">
                                                  <input
                                                            value={password}
                                                            type="text"
                                                            placeholder="Password"
                                                            readOnly
                                                            className="outline-none w-full py-1 px-6"
                                                            ref={passRef}
                                                  />
                                                  <button onClick={() => {
                                                            window.navigator.clipboard.writeText(password);
                                                            passRef.current.select();

                                                  }}
                                                            className="outline-none bg-blue-700 text-white px-6"
                                                  >COPY</button>

                                        </div>

                                        <div className="flex shadow rounded-lg overflow-hidden mb-4 px-5">
                                                  <div>
                                                            <input value={length}
                                                                      type="range"
                                                                      min="{6}"
                                                                      max="{100}"
                                                                      name="length"
                                                                      onChange={(e) => setLength(e.target.value)}
                                                                      id="length" />
                                                            <label htmlFor="length" className="text-white">Length: {length}</label>
                                                  </div>
                                                  <div className="mx-5">
                                                            <label htmlFor="Number" className="text-white">
                                                                      <input
                                                                                type="checkbox"
                                                                                id="Number"
                                                                                onChange={() => setIsNumber((prev) => !prev)}
                                                                                defaultChecked={__isNumber}
                                                                                name="Number" />
                                                                      &nbsp;  Number
                                                            </label>
                                                  </div>
                                                  <div>
                                                            <label htmlFor="char" className="text-white">
                                                                      <input
                                                                                type="checkbox"
                                                                                id="char"
                                                                                defaultChecked={__isChar}
                                                                                onChange={() => setIsChar((prev) => !prev)}
                                                                                name="char" />
                                                                      &nbsp; Character
                                                            </label>
                                                  </div>


                                        </div>


                              </div>



                    </div>
          )
}

export default PasswordGenerator;
