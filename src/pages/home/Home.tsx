import Banner from "./components/banner/Banner"
import Dashboard from "./components/dashboard/Dashboard"
import CardSwitch from "./components/cards-switch/CardSwitch"
import Footer from "./components/footer/Footer"
import { useState } from "react"
import styled from "styled-components"

interface SwitchThemeButton {
    darkTheme: boolean
}

const ButtonThemeElement = styled.button<SwitchThemeButton>`
    background-color: ${props => props.darkTheme ? 'rgb(190, 70, 76)' : 'rgb(1, 159, 131)'};
    border-style: none;
    height: 40px;
    padding: 6px 12px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: box-shadow .6s ease;
`;

const Home = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    const HandleClick = () => {
        darkTheme ? setDarkTheme(false) : setDarkTheme(true)
    }

    return (
        <>
            <ButtonThemeElement onClick={HandleClick} darkTheme={darkTheme}>
                Theme Change
            </ButtonThemeElement>

            <Banner
                text='Human Odyssey - First React Page'
                darkTheme={darkTheme}
            />

            <Dashboard darkTheme={darkTheme} />

            <CardSwitch darkTheme={darkTheme} />

            <Banner
                text='"Knowledge is power. Information is liberating. Education is the premise of progress..."'
                darkTheme={darkTheme}
            />

            <Footer
                darkTheme={darkTheme}
            />
        </>
    )
}

export default Home;