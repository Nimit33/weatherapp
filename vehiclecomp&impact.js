document.addEventListener('DOMContentLoaded', function () {
    // Vehicle data from the research paper
    const vehicleData = {
        "Toyota Innova": {
            "type": "ICE_gasoline",
            "unitSales": {
                "2021": 33375,
                "2020": 27592,
                "2019": 52705,
                "2018": 59630,
                "2017": 61775
            }
        },
        "Mitsubishi Pajero": {
            "type": "ICE_diesel",
            "unitSales": {
                "2021": 11843,
                "2020": 8693,
                "2019": 16662,
                "2018": 19338,
                "2017": 18577
            }
        },
        "Toyota Corolla Cross": {
            "type": "HEV",
            "unitSales": {
                "2021": 1070,
                "2020": 652
            }
        },
        "Mitsubishi Outlander Sport": {
            "type": "PHEV",
            "unitSales": {
                "2021": 35,
                "2020": 6,
                "2019": 20
            }
        },
        "Hyundai Kona Electric": {
            "type": "EV",
            "unitSales": {
                "2021": 315,
                "2020": 60
            }
        }
    };

    // Fuel economy, price, and taxes data
    const fuelData = {
        "ICE_gasoline": {
            "fuelEconomy": 10.00,
            "fuelPrice": 0.63,
            "fuelTaxes": 0.03
        },
        "ICE_diesel": {
            "fuelEconomy": 11.20,
            "fuelPrice": 0.80,
            "fuelTaxes": 0.04
        },
        "HEV": {
            "fuelEconomy": 23.25,
            "fuelPrice": 0.86,
            "fuelTaxes": 0.04
        },
        "PHEV": {
            "fuelEconomy": 56.00,
            "fuelPrice": 0.86,
            "fuelTaxes": 0.04
        },
        "EV": {
            "fuelEconomy": 0,
            "fuelPrice": 0, // No fuel price for EV
            "fuelTaxes": 0 // No fuel taxes for EV
        }
    };

    // Emission cost data
    const emissionCostData = {
        "CO": 0.0091,
        "NOx": 2.5716,
        "PM10": 4.6222,
        "PM2.5": 6.7251,
        "SOx": 4.3267,
        "CH4": 0.3024,
        "CO2": 0.0084,
        "N2O": 4.3267
    };

    // Calculate total emission cost for each vehicle
    function calculateEmissionCost(vehicleName) {
        const vehicle = vehicleData[vehicleName];
        const unitSales = Object.values(vehicle.unitSales);
        const totalSales = unitSales.reduce((acc, curr) => acc + curr, 0);
        const type = vehicle.type;
        const fuelEconomy = fuelData[type].fuelEconomy;
        const distance = 10000; // Average annual usage in km
        const totalDistance = distance * totalSales;
        const fuelConsumption = totalDistance / fuelEconomy;
        const fuelPrice = fuelData[type].fuelPrice;
        const fuelTaxes = fuelData[type].fuelTaxes;
        const totalFuelCost = fuelConsumption * fuelPrice;
        const totalFuelTaxes = fuelConsumption * fuelTaxes;
        const totalFuelCostAndTaxes = totalFuelCost + totalFuelTaxes;
        const emissionCostPerUnit = {
            "CO": emissionCostData.CO * fuelConsumption,
            "NOx": emissionCostData.NOx * fuelConsumption,
            "PM10": emissionCostData.PM10 * fuelConsumption,
            "PM2.5": emissionCostData["PM2.5"] * totalDistance,
            "SOx": emissionCostData.SOx * fuelConsumption,
            "CH4": emissionCostData.CH4 * fuelConsumption,
            "CO2": emissionCostData.CO2 * fuelConsumption,
            "N2O": emissionCostData.N2O * fuelConsumption
        };
        const totalEmissionCost = Object.values(emissionCostPerUnit).reduce((acc, curr) => acc + curr, 0);
        return {
            "totalEmissionCost": totalEmissionCost,
            "totalFuelCostAndTaxes": totalFuelCostAndTaxes
        };
    }

    // Generate comparison data for all vehicles
    const comparisonData = {};
    for (const vehicleName in vehicleData) {
        comparisonData[vehicleName] = calculateEmissionCost(vehicleName);
    }

    // Display comparison data
    function displayComparisonData() {
        const vehicleComparisonSection = document.getElementById('vehicleComparison');
        vehicleComparisonSection.innerHTML = '<h2>Vehicle Comparison</h2>';
        const comparisonTable = document.createElement('table');
        comparisonTable.innerHTML = `
            <tr>
                <th>Vehicle</th>
                <th>Total Emission Cost ($/1000 km)</th>
                <th>Total Fuel Cost & Taxes ($)</th>
            </tr>
        `;
        for (const vehicleName in comparisonData) {
            const { totalEmissionCost, totalFuelCostAndTaxes } = comparisonData[vehicleName];
            const row = `
                <tr>
                    <td>${vehicleName}</td>
                    <td>${totalEmissionCost.toFixed(2)}</td>
                    <td>${totalFuelCostAndTaxes.toFixed(2)}</td>
                </tr>
            `;
            comparisonTable.innerHTML += row;
        }
        vehicleComparisonSection.appendChild(comparisonTable);
    }

    // Display comparison data on page load
    displayComparisonData();
});
