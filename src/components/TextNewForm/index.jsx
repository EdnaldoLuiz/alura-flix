import styles from './TextNewForm.module.css'

// eslint-disable-next-line react/prop-types
const TextNewForm = ({title, paragraph, miniTitulo}) => {
    return(
        <>
        <div className={styles.center}>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>

            <div className={styles.secondText}>
                <hr className={styles.line} />
                <h4 className={styles.alignLeft}>{miniTitulo}</h4>
                <hr className={styles.line} />
            </div>
        </>

    )
}

export default TextNewForm;