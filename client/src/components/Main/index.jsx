import styles from './styles.module.css';
import { Link } from "react-router-dom";

const Main = () =>{

    const handleLogout = () =>{
        localStorage.removeItem('token')
        window.location.reload();
    }

    return(
        <><div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>MarineAuth</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
            <Link to="/files">
                <button>
                    Files
                </button>
            </Link></>
        
    )
};

export default Main;