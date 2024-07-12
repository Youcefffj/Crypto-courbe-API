import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from 'chart.js/auto'; // ADD THIS

const BitcoinChart = () => {
    const [prices, setPrices] = useState([]);
    const [date, setDate] = useState([]);

    // Effect hook to fetch data from the API and update the state
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1"
            );
            const data = response.data.prices.map(([date, price]) => ({ x: new Date(date), y: price }));
            const dataD = response.data.prices.map(([date]) => new Date(date).getTime());
            setPrices(data);
            setDate(dataD);
            console.log("DATA")
            console.log(data);
            console.log("DATAAAA");
            console.log(dataD);

        };
        fetchData();
    }, []);
    //const temps = Date(date).getTime();
    // console.log("data.date");
    // //console.log(temps);
    // console.log(prices);

    // Effect hook to create and update the chart
    useEffect(() => {
        const now = Date.now(); // timestamp en millisecondes de la date et l'heure actuelles
        const oneDay = 24 * 60 * 60 * 1000; // nombre de millisecondes dans une journée
        const thirtyDaysAgo = now - 3 * oneDay; // timestamp en millisecondes pour 30 jours avant maintenant


        // console.log(prices);
        // console.log(prices);


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
        console.log(thirtyDaysAgo);
        console.log(now);

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

export default BitcoinChart;
