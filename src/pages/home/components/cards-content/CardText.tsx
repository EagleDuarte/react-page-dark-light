import styled from "styled-components"

interface TextCardProps {
    children: any,
    darkTheme: boolean
}

const TextCardStyles = styled.div<TextCardProps>`
    padding: 50px;

    text-align: justify;
    color: ${props => props.darkTheme ? 'black' : 'white'};
    background-color: ${props => props.darkTheme ? '#fff' : '#333'};
    .text-card__title {
        font-size: 28px;
    }
    
    .text-card__text {
        font-size: 16px;
    }
`

const TextCard = (props: TextCardProps) => {
    return (
        <TextCardStyles darkTheme={props.darkTheme}>
            {props.children}
        </TextCardStyles>
    )
}

export default TextCard;