import styles from "./InputNewForm.module.css";

// eslint-disable-next-line react/prop-types
const InputNovoFormulario = ({ titleLabel, titlePlaceholder, categoryLabel, categoryPlaceholder, imageLabel, imagePlaceholder, videoLabel, videoPlaceholder, descriptionLabel, descriptionPlaceholder }) => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="titulo">{titleLabel}</label>
                    <input type="text" id="titulo" placeholder={titlePlaceholder} className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="categoria">{categoryLabel}</label>
                    <select id="categoria" className={styles.selectField}>
                        <option value="" disabled selected>{categoryPlaceholder}</option>
                        <option value="categoria1">Categoria 1</option>
                        <option value="categoria2">Categoria 2</option>
                    </select>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="imagem">{imageLabel}</label>
                    <input type="text" id="imagem" placeholder={imagePlaceholder} className={`${styles.inputField} ${styles.error}`} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="video">{videoLabel}</label>
                    <input type="text" id="video" placeholder={videoPlaceholder} className={styles.inputField} />
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="descricao">{descriptionLabel}</label>
                <textarea id="descricao" placeholder={descriptionPlaceholder} className={styles.textareaField}></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button>Guardar</button>
            </div>
            <div className={styles.secundButon}>
                <button>Limpar</button>
            </div>
        </div>
    );
}

export default InputNovoFormulario;
