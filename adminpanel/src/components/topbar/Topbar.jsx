import React from 'react'
import "./topbar.css"
import { NotificationsNone } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>WorkWithRayADMIN</span>
                    </div>
                <div className="topRight">
                    <div className='topbarIcons'>
                        <NotificationsNone />

                    </div>
                    </div>
            </div>
        </div>
    )
}