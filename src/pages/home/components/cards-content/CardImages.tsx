import styled from "styled-components"

interface CardImagesProps {
    children: any,
    darkTheme: boolean
}

const CardImagesStyles = styled.div<CardImagesProps>`
    opacity: ${props => props.darkTheme ? '1' : '0.6'};

    img {
        height: 100%;
        width: 100%;
    }
`

const CardImages = ({ children, darkTheme }: CardImagesProps) => {
    return (
        <CardImagesStyles darkTheme={darkTheme}>
            {children}
        </CardImagesStyles>
    )
}

export default CardImages;