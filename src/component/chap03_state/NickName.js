import React, {useState} from 'react';
import PropTypes from 'prop-types';

const NickName = props => {

    // useState 훅은 배열을 리턴하는데
    // 0 번에는 상태변수값 , 1번에는 상태 변수 값을 변경하는 setter 함수가 들어있음
    // const statement = useState();
    console.log('statement' , statement);


    const [nickName, setNickName] = useState('김철수');

    // const setNickName = statement[1];
    const changeNickName = e => {
        console.log('changeNickName Call!!')
        // nickName = '척척박사';
        setNickName('척척박사');

    }
    return (
            <>
                <h1>HELLO {nickName}</h1>
                <button className='btn' onClick={changeNickName}>척척박사</button>
                <button className='btn' onClick={setNickName}>척척석사</button>
            </>
    );
}

NickName.propTypes = {};

export default NickName;