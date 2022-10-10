import styled from "styled-components";

interface DashboardProps {
    darkTheme: boolean
}

const DashboardClass = styled.div<DashboardProps>`
    height: 200px;
    width: 100%;
    background-color: ${props => props.darkTheme ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;

    .info__icon {
        font-size: 48px;
        color: ${props => props.darkTheme ? 'tomato' : 'rgb(23, 86, 91)'};
    }

    .info__title {
        font-size: 20px;
        color: ${props => props.darkTheme ? 'white' : 'white'};
    }
    
    .info__text {
        font-size: 16px;
        color: ${props => props.darkTheme ? 'tomato' : 'white'};
    }
`

const Dashboard = (props: DashboardProps) => {
    return (
        <DashboardClass darkTheme={props.darkTheme}>
            <div>
                <i className="far fa-books info__icon"></i>

                <h3 className="info__title">
                    History's Odyssey
                </h3>

                <p className="info__text">
                    Discover it all about history.
                </p>
            </div>

            <div>
                <i className="far fa-brain info__icon"></i>

                <h3 className="info__title">
                    Wars, Politics and Theories
                </h3>

                <p className="info__text">
                    Understand the issues and the solutions.
                </p>
            </div>

            <div>
                <i className="far fa-code info__icon"></i>

                <h3 className="info__title">
                    Future and Technology
                </h3>

                <p className="info__text">
                    What holds in our future? 
                </p>
            </div>
        </DashboardClass>
    )
}

export default Dashboard;