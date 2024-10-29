import { useState } from 'react';
import styles from './SideBar.module.css'

function SideBar (){

    const [isToggleSideBar, setToggleSideBar] = useState(true);

    function handleToggle(){isToggleSideBar? styles['left']: styles['right']}

    return (
        <div className={styles['sideBarBlock']}>
            <div className={styles['sideBarBtn']}>
                <i className={styles['arrow']}></i>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate.</p>
        </div>
    )


}

export default SideBar;