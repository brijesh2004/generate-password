import React, { useState } from 'react'

const Home = () => {
    const [input, setInput] = useState('');
    const [Password, setPassword] = useState('');
    const chooseCharFrom = "zxcvbn(mlkjh)g*fds<aq.wer>tyui?op192837465!@#$%^&*";
    const HandleInputs = (e) => {
        setInput(e.target.value);
    }
    
    const generatePassword = () => {
        let pass = "";
        for (let i = 0; i < input; i++) {
          let a = parseInt((Math.random()*10000)%50);
          pass+=chooseCharFrom[a];
        }
        setPassword(pass);
        console.log(pass);
    }

    return (
        <>
            <div className='main_div'>
                <div className="center_div">
                <h1>Generate Strong Password</h1>
                    <input type="number" placeholder='Enter The Length of the Password' name='length' onChange={HandleInputs} value={input} /> <br /> <br />
                    <button onClick={generatePassword}>Get Password</button><br /><br />
                    <input type="text" contentEditable='true' onChange={HandleInputs} value={Password} readonly className='passwordresult'/><br /><br />
                </div>
            </div>
        </>
    )
}

export default Home
