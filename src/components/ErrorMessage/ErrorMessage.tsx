import styles from './index.module.css'

interface ErrorMessageProps {
    errorMessage: string
}
export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
    if (!errorMessage) {
        return null
    }
    return <h4 className={styles.errorMessage}>{errorMessage}</h4>
}
