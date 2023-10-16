import React from 'react'
import { useLoaderData } from 'react-router-dom';
const Github = () => {

          const data = useLoaderData();
          console.log(data);

          return (
                    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                              Github followers: {data.followers}
                              Github UserName: {data.login}
                              Github ID: {data.id}
                              <img src={data.avatar_url} width={300} alt="" />
                    </div>
          )
}

export default Github;
