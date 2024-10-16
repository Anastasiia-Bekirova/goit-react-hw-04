import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <p className={styles.errorMessage}>Whoops, something went wrong! Please try reloading this page!</p>
    )
}

export default ErrorMessage;