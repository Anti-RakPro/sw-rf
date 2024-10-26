import styles from './NameBar.module.css'




export default function NameBar (){
    return (
        <div className={styles['nameBarMain']}>
            <div className={styles['iner']}>
                <i className={styles['arrow']}></i>

            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate.</p>
        </div>
    )


}