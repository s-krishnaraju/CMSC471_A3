
d3.csv("./data/ghg_data.csv", function (err, rows) {

    // White Hat Chart
    Plotly.newPlot('white-hat', [{
        x: rows.map(d => d.TIME_PERIOD),
        y: rows.map(d => d.OBS_VALUE),
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Total GHG',
        line: { color: 'green' }
    }], {
        title: {
            text: 'Total Greenhouse Gas Emissions in the U.S. (2001–2022)',
            font: { size: 20 },
            xref: 'paper',
            x: 0.5
        },
        xaxis: {
            title: { text: 'Year' },
            showline: true,
            mirror: true
        },
        yaxis: {
            title: { text: 'Emissions (Thousands of tonnes CO2-equivalent)' },
            range: [3000000, null ],
            showline: true,
            mirror: true
        }
    });
})

d3.csv("./data/hfc_data.csv", function (err, rows) {

    Plotly.newPlot('black-hat', [{
        x: rows.map(d => d.TIME_PERIOD),
        y: rows.map(d => d.PERCENT_CHANGE / 100),  
        type: 'scatter',
        mode: 'lines+markers',
        name: 'GHG',
        line: { color: 'red' },
        hovertemplate: '(%{x}, +%{y:.0%})<extra></extra>'  
    }], {
        title: {
            text: 'Change in U.S. Greenhouse Gas Pollution (2001–2022)',
            font: { size: 20 },
            xref: 'paper',
            x: 0.5
        },
        xaxis: {
            title: { text: 'Year' },
            showline: true,
            mirror: true
        },
        yaxis: {
            title: { text: 'Percent Change (From 2001)' },
            showline: true,
            mirror: true,
            range: [-0.1, 1],  // Adjust range now that values are in decimal
            tickformat: '+.0%'  // Format y-axis ticks as percentage
        }
    });
});

