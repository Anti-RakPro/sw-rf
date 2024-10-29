import classNames from "classnames";
import {useState} from 'react';
import styles from './SideBar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

function SideBar() {

    const [isToggleSideBar, setToggleSideBar] = useState(false);
    const [isSideBarModSwitch, setSideBarModSwitch] = useState(true);

    function handleToggle() {
        setToggleSideBar(!isToggleSideBar)
    }
    function handleModeSwitch (str){
        if (str === "All" && !isSideBarModSwitch) {setSideBarModSwitch(!isSideBarModSwitch)}
        if(str === "Search" && isSideBarModSwitch) {setSideBarModSwitch(!isSideBarModSwitch)}
    }

    // classNames(styles['sideBarBtn'], {`${styles['right']}`: isToggleSideBar})
    return (
        <div className={classNames(
            styles['sideBarBlock'],
            isToggleSideBar && styles['sideBar-hidden']
        )}>
            <h3>Star Wars Characters </h3>
            <div className={styles['searchElement']}>
                <input placeholder={"Name"}/>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <div className={styles['sideBarBtn']}
                 onClick={handleToggle}>
                <i className={classNames(
                    styles['arrow'],
                    isToggleSideBar && styles['right']
                )}></i>
            </div>
            <div className={classNames(
               styles['sideBarModSwitch']
            )}>
                <button className={classNames(
                    isSideBarModSwitch && styles['sideBarModSwitchActive']
                )} onClick={()=>handleModeSwitch('All')}>All</button>
                <button className={classNames(
                    !isSideBarModSwitch && styles['sideBarModSwitchActive']
                )} onClick={()=>handleModeSwitch('Search')}>Search</button>
            </div>
            <div className={classNames(
                styles['sideBarContent'],
                isToggleSideBar && styles['sideBarContentPosition']
            )}>
                <div className={classNames(
                    !isSideBarModSwitch && styles['sideBarContentPosition']
                )} > 111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate.</div>
                <div className={classNames(
                    !isSideBarModSwitch && styles['sideBarContentPosition']
                )}> 222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate.</div>

            </div>

        </div>
    )


}

export default SideBar;