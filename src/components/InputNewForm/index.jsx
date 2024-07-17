import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  flex: 1 1 100%;
  padding: 1.3rem 1rem;
  outline: unset;
  font-size: var(--default-text-size);
  color: ${props => props.iserror ? 'var(--error-color)' : 'var(--text-color)'};
  border: 1px solid ${props => props.iserror ? 'var(--error-color)' : 'var(--border-color)'};
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
`;

const InputNovoFormulario = forwardRef(({ type, placeholder, iserror, errorMessage, ...rest }, ref) => {
    return (
        <StyledInput
            type={type}
            placeholder={iserror ? errorMessage : placeholder}
            iserror={iserror ? 'true' : undefined}
            ref={ref}
            {...rest}
        />
    );
});

InputNovoFormulario.displayName = 'InputNovoFormulario';

InputNovoFormulario.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    iserror: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export default InputNovoFormulario;
