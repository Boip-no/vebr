import React from "react";
import { Carousel } from "react-bootstrap";

function Slide() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p>
                        Carsten af Geijerstam
                    </p>
                    <h3> 
                        I arbeidet med disse oppgavene har Vegard benyttet seg av utvikling i C# og integrasjoner med XML og REST. Vegard har utført oppgavene sine på en god måte, han er ansvarsbevisst og lærevillig. Vegard viser også gode evner til kommunikasjon både muntlig og skriftlig.
                    </h3>
                    <p>
                        Visma Retail
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p>
                        Marianne Pedersen
                    </p>
                    <h3> 
                        Vegard var en postitiv, effektiv og pliktoppfyllende medarbeider. Han var samvittighetsfull overfor sine arbeidsoppgaver, våre kunder og for bedriften generelt. Vi var svært fornøyd med måten han utførte sine arbeidsoppgaver på. Ut fra dette kan vi trygt anbefale Vegard for fremtidige arbeidsgivere.
                    </h3>
                    <p>
                        Nøtterøy Bakeri
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;