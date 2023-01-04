import React, { useState, useEffect } from "react";
import './App.css';
import { json } from "react-router-dom";

export default function Ratings() {
    const [rapid, setRapid] = useState();
    const [blitz, setBlitz] = useState();


    useEffect(() => {
        fetch('https://api.chesswahili.com/lichess/top-ten')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setBlitz(json["blitz"]);
                setRapid(json["rapid"]);
            });
    }, []);

    return (
        <h2><div id="list" >
            <div class="container">
                <div class="row">
                    <div class="list-col-1">
                        <h2>Rapid</h2>
                        {
                            rapid ?
                                Object.keys(rapid).map((key, index) => (
                                    <div class="players">
                                        <div class="table-container">
                                            <h2>
                                                <ul class="table">
                                                    <li class="table-row">
                                                        <div class="col col-1">{index + 1}.</div>
                                                        <div class="col col-2">{key}</div>
                                                        <div class="col col-3">{rapid[key]}</div>
                                                    </li>
                                                </ul>
                                            </h2>
                                        </div>
                                    </div>

                                ))
                                : "loading"}
                    </div>

                    <div class="list-col-2">
                        <h2>Blitz</h2>
                        {
                            blitz ?
                                Object.keys(blitz).map((key, index) => (
                                    <div class="players">
                                        <div class="table-container">
                                            <h2>
                                                <ul class="table">
                                                    <li class="table-row">
                                                        <div class="col col-1">{index + 1}.</div>
                                                        <div class="col col-2">{key}</div>
                                                        <div class="col col-3">{blitz[key]}</div>
                                                    </li>
                                                </ul>
                                            </h2>
                                        </div>
                                    </div>

                                ))
                                : "loading"}
                    </div>
                </div>
            </div>
        </div>
        </h2 >
    );
}