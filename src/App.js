// import { useState, useEffect } from 'react';
// import color from './assets/color.json';
import PasswordGenerator from "./components/passwordGenerator";
function App() {
  // const [colors, setColorFromJson] = useState([]);
  // const [effectedColor, seteffectedColor] = useState();


  // useEffect(() => {
  //   setColorFromJson(color.colors);
  //   setColorInitially(color.colors[0].color_code);
  //   console.log(effectedColor);
  // }, [])


  // const setColorInitially = (color) => {
  //   seteffectedColor(color);
  // }

  // const changeColor = (color) => {
  //   setColorInitially(color.color_code);
  // }

  return (
    <>
      <PasswordGenerator />
      {/* <div className="w-full h-screen duration-200
      flex flex-wrap  w-full
      justify-center items-center" style={{ backgroundColor: effectedColor }}>
        <div className="fixed flex flex-wrap  w-full
                justify-center items-center flex-col">
          <h4 className="text-gray-50 font-medium">COLOR CODE : {effectedColor}</h4>
          <h4 className="text-gray-50 font-medium">
            BUTTON CLICKED ON : {effectedColor ? colors.find(el => el.color_code === effectedColor).button : 'N/A'}
          </h4>
        </div>

        <div className="fixed flex flex-wrap 
                justify-center bottom-12 inset-x-0 px-3 
                py-2 rounded-3xl">
          <div className="flex flex-wrap 
                justify-center gap-3 shadow-lg bg-white 
                px-3 py-2 rounded-3xl ">
            {
              colors.map(el =>
                <button
                  key={el.id}
                  onClick={() => changeColor(el)}
                  style={{ backgroundColor: el.color_code }}
                  className="outline-none 
                              px-4 py-1 
                              rounded-full 
                              text-white shadow-lg"
                >
                  {el.button}
                </button>
              )
            }
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
