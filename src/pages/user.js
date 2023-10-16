import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
          const params = useParams();
          return (
                    <div>Welcome,{params.id}</div>
          )
}

export default User