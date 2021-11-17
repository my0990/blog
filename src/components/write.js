import React, {useState} from 'react';
import styled from 'styled-components';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



const Wrapper = styled.div`
    width: 500px;
    margin: auto;
    text-align: left;
`




function Write(props){
    const [title,setTitle] = useState();
    const [content,setContent] = useState();

    const inputApi = async (title,content) => {
        await axios.post("http://localhost:5000/write",{'title': title, 'content': content}).then(()=>{history('/')})
    }
    
    const history = useNavigate();




    return(
        <Wrapper className='mt-4'>
            <Form className='p-4'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control onChange={(e)=>{setTitle(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" rows={6} onChange={(e)=>{setContent(e.target.value)}} />
                </Form.Group>
                <div style={{textAlign: 'center'}} className='mt-4'>
                    <Button variant="danger" onClick={()=>{inputApi(title,content)}}>입력</Button>
                </div>
            </Form>
        </Wrapper>
    )
}

export default Write