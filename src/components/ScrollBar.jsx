import React from 'react';
import BodyPart from '../components/BodyPart'

const ScrollBar = ({data , part , setPart}) => {
  return (
    <div className='row' 
        style={{"display": "flex",
                "flexDirection": "row",
                "overflowX" : "auto"
             }}>

        {
            data.map(
                (item , index) => (
                    <div
                    className='ml-auto mr-auto mt-5'
                    key={index}
                    itemID = {item.id || item}
                    title = {item.id || item}
                    >

                    <BodyPart 
                    item = {item}
                    part= {part}
                    setPart= {setPart}
                    />

                    </div>
                )
            )
        }
    </div>
  )
}

export default ScrollBar