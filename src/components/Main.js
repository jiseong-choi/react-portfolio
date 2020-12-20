import React from 'react'
import { GithubOutlined, MailFilled, YoutubeFilled } from '@ant-design/icons';

function Main() {
    console.log('Main')

    const onClickHandler = () => {
        window.open('https://github.com/jiseong-choi')
    }

    const onClickHandler1 = () => {
        const url = "jiseong1951@kakao.com"
        navigator.clipboard.writeText(url)
            .then(() => {
            alert('메일주소가 복사되었습니다.')
        })
    }
    const onClickHandler22 = () => {
        window.open('https://www.youtube.com/channel/UCggeouWgC70AnuCdI9CWLdg')
    }

    return (
        <div >
            <div className="icons" style={{ display: 'flex' }}>
                <GithubOutlined
                    onClick={onClickHandler}
                    style={{ margin:'5px',fontSize:'27px' }}
                />
                <MailFilled
                    onClick={onClickHandler1}
                    style={{ margin:'5px',fontSize:'26px' }}
                />
                <YoutubeFilled
                    onClick={onClickHandler22}
                    style={{ margin:'5px',fontSize:'28px' }}
                />
            </div>
            <div>
                <h1 style={{ fontSize:'20px'}}>현탁ㅋ타가타같가ㅏㄱㅌ가</h1>
                <span>
                dkdkdkdkdkkdkd
                </span>
            </div>
        </div>
    )
}

export default Main
