import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ListGroup} from 'react-bootstrap';



function List(){
    const[data,setData] = useState([1,2])
    const getData = async () => {
        const response = await axios.get('http://localhost:5000/list');
        setData(response.data)
        console.log(response)
    }
    useEffect(()=>{
        getData();
        
    },[]);
    
    return(
        <div>
        <h1>list</h1>
        <ListGroup>
            {data.map((a,i)=>{
                return(
                    <ListGroup.Item key={i}>
                        <h1>{a.제목}</h1>
                        <h2>{a.내용}</h2>
                    </ListGroup.Item>
                )
            })}

        </ListGroup>

        </div>
    )
}

export default List