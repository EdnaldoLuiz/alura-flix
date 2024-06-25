import TextNewForm from "../TextNewForm/index"
import InputNovoFormulario from "../InputNewForm/index";

const NewForm = () => {
    return (
        <>
        <TextNewForm
        title="Novo Video"
        paragraph="COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO"
        miniTitulo="CRIAR CARD"
        />
            <InputNovoFormulario 
        titleLabel="Título" 
        titlePlaceholder="Ingrese el título"
        categoryLabel="Categoria"
        categoryPlaceholder="Selecione uma categoria"
        imageLabel="Imagem"
        imagePlaceholder="O link é obrigatório"
        videoLabel="Vídeo"
        videoPlaceholder="Digite o link do vídeo"
        descriptionLabel="Descrição"
        descriptionPlaceholder="Sobre o que é esse vídeo?"
/>

        </>
    );
};

export default NewForm;
