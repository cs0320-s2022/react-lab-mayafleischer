import './App.css';
import TextBox from "./TextBox";
import React, {useState} from 'react';
//@ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; // for external button
import axios from 'axios';

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const data = {
            "sun": sun,
            "moon": moon,
            "rising": rising,

        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        axios.post('http://localhost:4567/horoscope', data, config)
            .then(response => {
                    console.log(response.data);
                    setHoroscope(response.data['horoscope']);
                }
            )
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="Horoscope">
            <h1>Horoscopes</h1>

            <TextBox label={"Sun Sign"} change={setSun}/>
            <TextBox label={"Moon Sign"} change={setMoon}/>
            <TextBox label={"Rising Sign"} change={setRising}/>

            <AwesomeButton type="primary" onPress={requestHoroscope()}>Button to Submit</AwesomeButton>
            <p>
                {horoscope.map((trait: String) => <p>{trait}</p>)}
            </p>
        </div>
    );
}


export default Horoscope;