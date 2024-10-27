import classNames from "classnames";
import {useState} from 'react';
import styles from './SideBar.module.css'

function SideBar() {

    const [isToggleSideBar, setToggleSideBar] = useState(false);

    function handleToggle() {
        setToggleSideBar(!isToggleSideBar)
    }


    // classNames(styles['sideBarBtn'], {`${styles['right']}`: isToggleSideBar})
    return (
        <div className={classNames(
            styles['sideBarBlock'],
            isToggleSideBar && styles['sideBar-hidden']
        )}>
            <div className={styles['sideBarBtn']}
                 onClick={handleToggle}>
                <i className={classNames(
                    styles['arrow'],
                    isToggleSideBar && styles['right']
                )}></i>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate.</p>
        </div>
    )


}

export default SideBar;