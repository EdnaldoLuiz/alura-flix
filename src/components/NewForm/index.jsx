import styled from 'styled-components';
import Button from '../Button';
import InputNovoFormulario from '../InputNewForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useVideo } from '../../hooks/useVideo';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  titulo: yup.string().required("Título é obrigatório").min(3),
  link: yup.string().url("Insira uma URL válida").required("Vídeo é obrigatório"),
  categoria: yup.string().required("Categoria é obrigatória"),
  descricao: yup.string().required("Descrição é obrigatória"),
});

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background: #000509;

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    bottom: 10%;
    width: 150%;
    left: -25%;
    background: linear-gradient(83.21deg, #25272b 0%, #2e3232 100%);
    -webkit-mask-image: radial-gradient(rgba(0, 0, 0, .45), transparent 70%);
    mask-image: radial-gradient(rgba(0, 0, 0, .45), transparent 70%);
  }
`;

const FormContainer = styled.div`
  padding: 40px;
  border-radius: 8px;
  max-width: 550px;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  filter: brightness(1.5);
  margin-bottom: 10px;
  color: var(--text-color-blue);
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-color);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Select = styled.select`
  padding: 1.3rem 1rem;
  color: var(--text-color);
  border: var(--border);
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  font-size: var(--default-text-size);
`;

const Textarea = styled.textarea`
  padding: 10px;
  color: var(--text-color);
  border: var(--border);
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  font-size: var(--default-text-size);
  resize: none;
  outline: unset;
  height: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const NewForm = () => {
  const { postVideo } = useVideo();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3002/videos'); 
      const data = await response.json();
      const uniqueCategories = [...new Set(data.map(video => video.categoria))];
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    postVideo(data)
      .then((data) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContent>
      <Title>Novo Vídeo</Title>
      <Subtitle>Complete o formulário para criar um novo vídeo</Subtitle>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputNovoFormulario
            {...register("titulo")}
            placeholder="Insira o título do vídeo"
            type="text"
            iserror={!!errors.titulo}
            errorMessage={errors.titulo?.message}
          />
          <InputNovoFormulario
            {...register("link")}
            placeholder="Insira um link de vídeo do YouTube"
            type="text"
            iserror={!!errors.video}
            errorMessage={errors.video?.message}
          />
          <Select
            {...register("categoria")}
            style={{
              borderColor: errors.categoria ? 'var(--error-color)' : 'var(--border-color)',
              color: errors.categoria ? 'var(--error-color)' : 'var(--text-color)'
            }}
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </Select>
          <Textarea
            {...register("descricao")}
            placeholder="Descrição"
            style={{
              borderColor: errors.descricao ? 'var(--error-color)' : 'var(--border-color)',
              color: errors.descricao ? 'var(--error-color)' : 'var(--text-color)'
            }}
          />
          <ButtonContainer>
            <Button text="Guardar" type="submit" btntype={1} />
            <Button text="Limpar" type="button" btntype={2} onClick={() => reset()} />
          </ButtonContainer>
          {loading && <p>Carregando...</p>}
          {message && <p>{message}</p>}
        </Form>
      </FormContainer>
    </MainContent>
  );
};

export default NewForm;
