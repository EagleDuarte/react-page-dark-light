import styled from "styled-components";

interface BannerProps {
    text?: string,
    darkTheme?: boolean
}

const BannerStyles = styled.div<BannerProps>`
    height: 200px;
    width: 100%;
    background-color: ${props => props.darkTheme ? 'rgb(90, 90, 90)' : 'rgba(0, 90, 90)'};  
    display: flex;
    align-items: center;
    justify-content: center;

    .banner__text {
        font-size: 24px;
        font-weight: bold;
        color: ${props => props.darkTheme ? 'white' : 'white'};
    }
`

const Banner = (props: BannerProps) => {
    return (
        <BannerStyles darkTheme={props.darkTheme}>
            <p className="banner__text">
                {props.text}
            </p>
        </BannerStyles>
    )
}

export default Banner;