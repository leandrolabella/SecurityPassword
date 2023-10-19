import React, { useEffect, useState } from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import './TestPassword.css';

function TestPassword() {

    const [password, setPassword] = useState("");
    const [percent, setPercent] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})');
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
        let textResult = document.getElementById('test-result-text');
        if (strongPassword.test(password)) {
            setPercent(100);
            setText("Sua senha é forte!");
            textResult.style.color = "green";
        } else if (mediumPassword.test(password)) {
            setPercent(50);
            setText("Sua senha é razoável!");
            textResult.style.color = "orange";
        } else if (password.length !== 0) {
            setPercent(25);
            setText("Sua senha é fraca!");
            textResult.style.color = "#cf133b";
        } else {
            setPercent(0);
            setText("");
        }
    }, [password]);

    return (
        <div>
            <div className='test-container'>
                 <input type='text' placeholder='Insira sua senha' onChange={(e) => setPassword(e.target.value)} className='test-input'></input>
            </div>
            <div className='test-container-result'>
                <div className='test-container-result-progress'>
                <Progress className='test-progressbar' theme={{
                    success: {
                        symbol: '😀',
                        color: '#1E4620'
                    },
                    active: {
                        color: '#F05E16'
                    },
                    default: {
                        color: '#cf133b'
                    }
                }} percent={percent}
                />
                </div>
                <div className='test-container-result-text'>
                    <p className='test-result-text' id='test-result-text'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TestPassword