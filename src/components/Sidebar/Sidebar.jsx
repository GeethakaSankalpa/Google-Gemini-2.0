import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    // Toggle menu visibility when the menu icon is clicked
    const [extended, setExtended] = useState(true)

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(previous => !previous)} className='menu' src={assets.menu_icon} alt='menu' />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt='new chat' />
                    {extended ? <p> New Chat </p> : null}
                </div>

                {extended ?
                    <div className="recent">
                        <p className='recent-title'> Recent </p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt='recent' />
                            <p> What is react.... </p>
                        </div>
                    </div>
                    : null}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt='Help' />
                    {extended ? <p> Help </p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt='History' />
                    {extended ? <p> Activity </p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt='Settings' />
                    {extended ? <p> Settings </p> : null}
                </div>

            </div>

        </div>
    )
}

export default Sidebar
