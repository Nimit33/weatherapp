// document.addEventListener('DOMContentLoaded', function () {
//     const carFootprintForm = document.getElementById('carFootprintForm');
//     const resultDiv = document.getElementById('result');

//     carFootprintForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const dailyDistance = parseFloat(document.getElementById('dailyDistance').value);
//         const carType = document.getElementById('carType').value;
//         const ownershipDuration = parseFloat(document.getElementById('ownershipDuration').value);

//         const carbonFootprint = calculateCarbonFootprint(dailyDistance, carType, ownershipDuration);

//         displayResult(carbonFootprint);
//     });

//     function calculateCarbonFootprint(dailyDistance, carType, ownershipDuration) {
//         // Data from the research paper
//         const fuelEconomyData = {
//             ICE_gasoline: 10.00,
//             ICE_diesel: 11.20,
//             HEV: 23.25,
//             PHEV: 56.00,
//             EV: 0 // Electric vehicles have no fuel economy
//         };

//         const fuelPriceData = {
//             ICE_gasoline: 0.63,
//             ICE_diesel: 0.80,
//             HEV: 0.86, // Two values for hybrid vehicles: gasoline and electricity prices
//             PHEV: 0.86,
//             EV: 0 // Electric vehicles have no fuel price
//         };

//         const fuelTaxesData = {
//             ICE_gasoline: 0.03,
//             ICE_diesel: 0.04,
//             HEV: 0.04,
//             PHEV: 0.04,
//             EV: 0 // Electric vehicles have no fuel taxes
//         };

//         const averageAnnualUsage = 10000; // Average annual usage in km
//         const fuelEconomy = fuelEconomyData[carType];
//         const fuelPrice = fuelPriceData[carType];
//         const fuelTaxes = fuelTaxesData[carType];
//         const totalDistance = dailyDistance * 365 * ownershipDuration;

//         let carbonFootprint = 0;

//         if (carType !== 'EV') {
//             // Calculate carbon footprint for ICE, HEV, and PHEV vehicles
//             const fuelConsumption = totalDistance / fuelEconomy;
//             const totalFuelPrice = fuelConsumption * fuelPrice;
//             const totalFuelTaxes = fuelConsumption * fuelTaxes;
//             carbonFootprint = totalFuelPrice + totalFuelTaxes;
//         }

//         return carbonFootprint;
//     }

//     function displayResult(carbonFootprint) {
//         resultDiv.innerHTML = `
//             <h2>Results:</h2>
//             <p>Carbon Footprint: $${carbonFootprint.toFixed(2)}</p>
//         `;
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        const dailyDistance = parseFloat(document.getElementById('dailyDistance').value);
        const carType = document.getElementById('carType').value;
        const ownershipDuration = parseFloat(document.getElementById('ownershipDuration').value);

        const carbonFootprint = calculateCarbonFootprint(dailyDistance, carType, ownershipDuration);

        displayResult(carbonFootprint);
    });

    function calculateCarbonFootprint(dailyDistance, carType, ownershipDuration) {
        // Data from the research paper
        const emissionFactors = {
            ICE_gasoline: 2.6758,
            ICE_diesel: 2.8445,
            HEV: 1.2262,
            PHEV: 3.6652,
            EV: 0 // Since EVs have no direct tailpipe emissions
        };

        const fuelEconomyData = {
            ICE_gasoline: 10.00,
            ICE_diesel: 11.20,
            HEV: 23.25,
            PHEV: 56.00,
            EV: 0 // Electric vehicles have no fuel economy
        };

        const fuelPriceData = {
            ICE_gasoline: 0.63,
            ICE_diesel: 0.80,
            HEV: 0.86, // Two values for hybrid vehicles: gasoline and electricity prices
            PHEV: 0.86,
            EV: 0 // Electric vehicles have no fuel price
        };

        const fuelTaxesData = {
            ICE_gasoline: 0.03,
            ICE_diesel: 0.04,
            HEV: 0.04,
            PHEV: 0.04,
            EV: 0 // Electric vehicles have no fuel taxes
        };

        const electricityCO2Emission = 0.449; // kg CO2 per kWh of electricity in Indonesia

        const averageAnnualUsage = 10000; // Average annual usage in km

        const emissionFactor = emissionFactors[carType];
        const fuelEconomy = fuelEconomyData[carType];
        const fuelPrice = fuelPriceData[carType];
        const fuelTaxes = fuelTaxesData[carType];

        const totalDistance = dailyDistance * 365 * ownershipDuration;

        let carbonFootprint = 0;

        if (carType !== 'EV') {
            // Calculate carbon footprint for ICE, HEV, and PHEV vehicles
            const fuelConsumption = totalDistance / fuelEconomy;
            const totalFuelPrice = fuelConsumption * fuelPrice;
            const totalFuelTaxes = fuelConsumption * fuelTaxes;
            carbonFootprint = (totalFuelPrice + totalFuelTaxes) * emissionFactor;
        } else {
            // Calculate carbon footprint for EV
            const electricityConsumption = totalDistance / averageAnnualUsage;
            carbonFootprint = electricityConsumption * electricityCO2Emission * ownershipDuration;
        }

        return carbonFootprint;
    }

    function displayResult(carbonFootprint) {
        resultDiv.innerHTML = `
            <h2>Results:</h2>
            <p>Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO2</p>
        `;
    }
});
