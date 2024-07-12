
import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from 'chart.js/auto'; // ADD THIS


//appelle le graph puis l'envoie a l'afficahge.

const CallGraph = (props) => {
    const id = props.symbol;
    const time = props.time;
    console.log(id)
    console.log(time)
    const [prices, setPrices] = useState([]);
    const [date, setDate] = useState([]);

    // Effect hook to fetch data from the API and update the state
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${time}`
            );
            const data = response.data.prices.map(([date, price]) => ({ x: new Date(date), y: price }));
            const dataD = response.data.prices.map(([date]) => new Date(date).getTime());
            setPrices(data);
            setDate(dataD);
        };
        fetchData();
    }, []);

    // Effect hook to create and update the chart
    useEffect(() => {

        const ctx = document.getElementById("bitcoinChart");
        const chart = new Chart(ctx, {

            type: "line",

            data: {

                labels: date.map((date) => new Date(date).toLocaleString()), // convertir les timestamps en format de date lisible
                datasets: [
                    {
                        label: "Bitcoin Price USD",
                        data: prices
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            type: "time",
                            time: {
                                unit: "day",
                            },
                        },
                    ],
                },
            },
        });
        return () => {
            chart.destroy();
        };
    }, [prices]);

    return (
        <div>
            <canvas id="bitcoinChart"></canvas>
        </div>
    );
};

export default CallGraph;

