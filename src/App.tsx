
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <div className={styles.form1container}>
                    <form className={styles.formContainer}>
                        <label className={styles.label}>Todo :</label><br /><input type="text" className={styles.input1} /><br />
                        <button className={styles.button1}>Input</button>
                    </form>
                </div>
                <div className={styles.form2container}>
                    <div className={styles.listedItemContainer} />
                </div></div>
        </div>
    );
}

export default App;
