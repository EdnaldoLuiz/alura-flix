import styles from './EditCard.module.css'

const EditCard = () =>{
      return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.textMain}>EDITAR CARD:</h2>
          <button className={styles.closeButton}>&times;</button>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="titulo">Título</label>
            <input type="text" id="titulo" placeholder="Título" className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="categoria">Categoria</label>
            <select id="categoria" className={styles.selectField}>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="imagem">Imagem</label>
            <input type="text" id="imagem" placeholder="Imagem URL" className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="video">Vídeo</label>
            <input type="text" id="video" placeholder="Vídeo URL" className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="descricao">Descrição</label>
            <textarea id="descricao" placeholder="Descrição" className={styles.textareaField}></textarea>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.saveButton}>GUARDAR</button>
            <button type="button" className={styles.clearButton}>LIMPAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default EditCard;