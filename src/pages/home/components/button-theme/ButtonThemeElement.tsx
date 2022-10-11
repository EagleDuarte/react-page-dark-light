import styled from "styled-components"

const ButtonThemeElement = styled.button`
border-style: none;
height: 40px;
padding: 6px 12px;
color: white;
font-size: 1rem;
cursor: pointer;
transition: box-shadow .6s ease;
align-items: center;
justify-content: center;
`;

const SwitchThemeButton = () => {
    return (
        <ButtonThemeElement>
            Change Theme
        </ButtonThemeElement>
    )
}

export default ButtonThemeElement;