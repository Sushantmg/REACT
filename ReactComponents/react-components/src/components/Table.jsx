import React from 'react'

export default function Table(props) {
  return (
   
    <>
 <tr>
            <th>name</th>
            <th>roll</th>
            <th>class</th>
        </tr>
        
            {props.data}
            
        
        </>
  )
}
