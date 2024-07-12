import React, { useState, useEffect } from 'react';
import BitcoinChart from './BitcoinChart'
import BitcoinChartDay from './BitcoinChartDay';






const CoinChart = () => {
    const min = 0;
    const length = 10;
    const max = 100;
    return (

        <div>
            {/* <Graph /> */}
            <BitcoinChart />
            {/* <BitcoinChartDay /> */}
            <br />
            <br />
            <br />
            <h2><button>Courbe pour 1jour</button></h2>
        </div>


    );
};

export default CoinChart;
