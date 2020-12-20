import React from 'react'
import Icon,{ GithubOutlined,MailOutlined,YoutubeFilled } from '@ant-design/icons';

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
            <div>
                <GithubOutlined
                    onClick={onClickHandler}
                    style={{ margin:'2px' }}
                />
                <MailOutlined
                    onClick={onClickHandler1}
                    style={{ margin:'2px' }}
                />
                <YoutubeFilled
                    onClick={onClickHandler22}
                    style={{ margin:'2px' }}
                />
            </div>
        </div>
    )
}

export default Main
