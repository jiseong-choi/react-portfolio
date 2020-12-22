import React from 'react'
import '../App.css'
import image from './KakaoTalk_20201209_160720642.jpg'

function Main() {
    //console.log('Main')
    return (
        <React.Fragment>
            <div id='test'>
                <div className='introduce'>
                    <h1 style={{ fontSize: '20px', marginBottom: '20px',position: 'relative', right:'40px' }}>
                        Web Full-stack Developer <br />
                        <span style={{ fontSize: '15px'}}>"Jiseong-choi" Who trying really hard daily to improve himself.</span>
                    </h1>
                    <div className='content'>
                        <img style={{height: '315px', width: '255px'}} src={image} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main
