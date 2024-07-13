import styled from 'styled-components';
import Button from '../../Button';
import InputNovoFormulario from '../../InputNewForm';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    titulo: yup.string().required("Título é obrigatório").min(3),
    link: yup.string().url("Insira uma URL válida").required("Vídeo é obrigatório"),
    categoria: yup.string().required("Categoria é obrigatória"),
    descricao: yup.string().required("Descrição é obrigatória"),
});

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalContainer = styled.div`
  background-color: #000509;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  max-width: 600px;
  border: 2px solid #2271D1;
`;

const CloseButton = styled.span`
  float: right;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const Title = styled.h1`
  color: #2271D1;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-top: .7rem;
  font-weight: 700;
`;

const Select = styled.select`
  padding: 1.3rem 1rem;
  color: var(--text-color);
  border: var(--border);
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  font-size: var(--default-text-size);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const VideoEdit = ({ video, onClose, onUpdate }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: video,
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (data) => {
        try {
            await onUpdate(data);
            onClose();
        } catch (error) {
            console.error('Failed to update video:', error);
        }
    };

    return (
        <Overlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>X</CloseButton>
                <Title>EDITAR CARD</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="titulo">Título</Label>
                    <InputNovoFormulario {...register("titulo")} placeholder="Título do vídeo" type="text" iserror={!!errors.titulo} errorMessage={errors.titulo?.message} />
                    <Label htmlFor="link">Link do Vídeo</Label>
                    <InputNovoFormulario {...register("link")} placeholder="Link do vídeo" type="text" iserror={!!errors.link} errorMessage={errors.link?.message} />
                    <Label htmlFor="categoria">Categoria</Label>
                    <Select {...register("categoria")}>
                        <option value="back-end">back-end</option>
                        <option value="front-end">front-end</option>
                        <option value="mobile">mobile</option>
                    </Select>
                    <Label htmlFor="descricao">Descrição</Label>
                    <InputNovoFormulario {...register("descricao")} placeholder="Descrição" type="textarea" iserror={!!errors.descricao} errorMessage={errors.descricao?.message} />
                    <ButtonContainer>
                        <Button text="Guardar" type="submit" btntype={1} />
                        <Button text="Limpar" type="button" btntype={2} onClick={() => reset()} />
                    </ButtonContainer>
                </Form>
            </ModalContainer>
        </Overlay>
    );
};

VideoEdit.propTypes = {
    video: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default VideoEdit;
