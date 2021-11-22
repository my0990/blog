import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <Link to='/write'><button>할일 등록하기</button></Link>
    )
}

export default Home;