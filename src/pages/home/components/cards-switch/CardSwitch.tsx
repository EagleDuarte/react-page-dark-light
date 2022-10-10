import styled from "styled-components";
import CardText from "../cards-content/CardText"
import CardImages from "../cards-content/CardImages"

const CardSwitchStyles = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px 400px 400px;
`

interface CardSwitchProps {
    darkTheme: boolean
}

const CardSwitch = (props: CardSwitchProps) => {
    return (
        <CardSwitchStyles>
            <CardText darkTheme={props.darkTheme}>
                <h1 className="text-card__title">
                    Albert Einstein
                </h1>

                <p className="text-card__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ratione consectetur reprehenderit quisquam quae itaque similique repellat dolorum doloremque magnam veritatis rem, nihil, nesciunt expedita quas! Blanditiis expedita quibusdam laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi et. Mollitia itaque debitis nulla reiciendis? Officiis et at exercitationem doloribus, neque consequuntur reiciendis blanditiis velit magnam vel sequi cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ullam eaque error possimus. Labore nemo ratione cum incidunt voluptas veritatis? Iusto quae non nulla quos est quis minus nemo illum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, tempora mollitia. Atque, eos repellendus. Deserunt nam minus qui autem porro rem ex eos, voluptatum expedita et recusandae aliquid repellendus possimus?
                </p>
            </CardText>

            <CardImages darkTheme={props.darkTheme}>
                <img src="https://t-2.tstatic.net/medan/foto/bank/images/perjalanan-albert-einstein.jpg" alt="" />
            </CardImages>

            <CardImages darkTheme={props.darkTheme}>
                <img src="https://cdn.aaihs.org/2018/01/King.jpg" alt="" />
            </CardImages>

            <CardText darkTheme={props.darkTheme}>
                <h1 className="text-card__title">
                    Martin Luther King
                </h1>

                <p className="text-card__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ratione consectetur reprehenderit quisquam quae itaque similique repellat dolorum doloremque magnam veritatis rem, nihil, nesciunt expedita quas! Blanditiis expedita quibusdam laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi et. Mollitia itaque debitis nulla reiciendis? Officiis et at exercitationem doloribus, neque consequuntur reiciendis blanditiis velit magnam vel sequi cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ullam eaque error possimus. Labore nemo ratione cum incidunt voluptas veritatis? Iusto quae non nulla quos est quis minus nemo illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos velit voluptas qui, nostrum quasi ipsam quaerat nam fuga architecto eaque quibusdam. Unde quod provident debitis a possimus, explicabo recusandae odio.
                </p>
            </CardText>

            <CardText darkTheme={props.darkTheme}>
                <h1 className="text-card__title">
                    Theodore Roosevelt
                </h1>

                <p className="text-card__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ratione consectetur reprehenderit quisquam quae itaque similique repellat dolorum doloremque magnam veritatis rem, nihil, nesciunt expedita quas! Blanditiis expedita quibusdam laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi et. Mollitia itaque debitis nulla reiciendis? Officiis et at exercitationem doloribus, neque consequuntur reiciendis blanditiis velit magnam vel sequi cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ullam eaque error possimus. Labore nemo ratione cum incidunt voluptas veritatis? Iusto quae non nulla quos est quis minus nemo illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi quaerat voluptatibus voluptatem eum eligendi aspernatur ipsam voluptate odio corrupti maiores, dolores molestias, sint repellat veniam vitae? Odio, pariatur accusantium?
                </p>
            </CardText>

            <CardImages darkTheme={props.darkTheme}>
                <img src="http://www.buckleyschool.com/media/2010/roosevelt_on_the_stump-_1912.jpeg?anchor=center&mode=crop&width=640&height=640&rnd=132006005190000000" alt="" />
            </CardImages>
        </CardSwitchStyles>
    )
}

export default CardSwitch;