import styled from 'styled-components'

type FormStyledProps = {
  isActive: boolean // Exemplo de prop que pode afetar o estilo
}

export const FormStyled = styled.form<FormStyledProps>`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  border: ${({ isActive }) => (isActive ? '2px solid blue' : 'none')};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const HeroTitle = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;
  color: white;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
