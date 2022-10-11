import styled from "styled-components"

interface FooterContent {
    darkTheme: boolean
}

const FooterClass = styled.div<FooterContent>`
    height: 200px;
    width: 100%;
    background-color: ${props => props.darkTheme ? 'black' : 'rgb(0, 120, 94)'};
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .footer__text-wrapper {
        margin-left: 30px;
    }

    .footer__link-text {
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.darkTheme ? 'tomato' : 'black'};
        margin-right: 30px;
    }

    .footer__link-text:hover {
        cursor: pointer;
    }

    .footer__text {
        font-size: 14px;
        color: white;
    }

    .footer__icons-wrapper {
        justify-self: end;
        margin-right: 30px;
    }

    .footer__icon {
        font-size: 32px;
        color: ${props => props.darkTheme ? 'tomato' : 'black'};
        margin-right: 30px
    }

    .footer__icon:hover {
        cursor: pointer;
    }
`;

const Footer = (props: FooterContent) => {
    return (
        <FooterClass darkTheme={props.darkTheme}>
            <div className="footer__text-wrapper">
                <p>
                    <span className="footer__link-text">
                        About
                    </span>

                    <span className="footer__link-text">
                        Contact
                    </span>

                    <span className="footer__link-text">
                        Donations
                    </span>

                    <span className="footer__link-text">
                        Projects
                    </span>
                </p>

                <p className="footer__text">
                    GrowDev Task, 2022.
                </p>
            </div>

            <div className="footer__icons-wrapper">
                <i className="fab fa-whatsapp-square footer__icon" />

                <i className="fab fa-github-square footer__icon" />

                <i className="fab fa-linkedin footer__icon" />
            </div>
        </FooterClass>
    )
}

export default Footer;