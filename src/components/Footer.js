import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import './Footer.css'

function Footer() {
    return (
        <div>
            <div style={{position:'absolute', left:'48%',top:'88%'}}>
                <span className='downscroll' style={{display:'block'}}>Scroll down.</span>
                <DownOutlined />
            </div>
        </div>
    )
}

export default Footer
