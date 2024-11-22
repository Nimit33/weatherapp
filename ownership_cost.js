// document.getElementById('tcoForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get input values
//     var carType = document.getElementById('carType').value;
//     var carPrice = parseFloat(document.getElementById('carPrice').value);
//     var monthlyUsage = parseFloat(document.getElementById('monthlyUsage').value);
//     var carMileage = parseFloat(document.getElementById('carMileage').value);
//     var fuelCost = parseFloat(document.getElementById('fuelCost').value);
//     var yearsOwnership = parseInt(document.getElementById('yearsOwnership').value);

//     // Calculate TCO
//     var totalCost = 0;
//     if (carType === 'petrol') {
//         var totalFuelCost = monthlyUsage * 12 * yearsOwnership * fuelCost / carMileage;
//         totalCost = carPrice + totalFuelCost;
//     } else if (carType === 'electric') {
//         var totalElectricityCost = monthlyUsage * 12 * yearsOwnership * fuelCost / carMileage;
//         totalCost = carPrice + totalElectricityCost;
//     }

//     // Display result
//     var resultContainer = document.getElementById('tcoResult');
//     resultContainer.innerHTML = '<h3>Total Cost of Ownership:</h3><p>$' + totalCost.toFixed(2) + '</p>';
// });

document.getElementById("tcoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const carType = document.getElementById("carType").value;
    const carPrice = parseFloat(document.getElementById("carPrice").value);
    const monthlyUsage = parseFloat(document.getElementById("monthlyUsage").value);
    const fuelCost = parseFloat(document.getElementById("fuelCost").value);
    const carMileageRange = parseFloat(document.getElementById("carMileageRange").value);
    const yearsOwnership = parseInt(document.getElementById("yearsOwnership").value);

    let totalCost;
    if (carType === "petrol") {
        totalCost = calculatePetrolCarTCO(carPrice, monthlyUsage, fuelCost, carMileageRange, yearsOwnership);
    } else if (carType === "electric") {
        totalCost = calculateElectricCarTCO(carPrice, monthlyUsage, fuelCost, carMileageRange, yearsOwnership);
    }

    displayTCOResult(totalCost);
});

function calculatePetrolCarTCO(carPrice, monthlyUsage, fuelCost, carMileage, yearsOwnership) {
    const totalFuelCost = (monthlyUsage / carMileage) * fuelCost * 12 * yearsOwnership;
    const totalCost = carPrice + totalFuelCost;
    return totalCost;
}

function calculateElectricCarTCO(carPrice, monthlyUsage, electricityCost, carRange, yearsOwnership) {
    const totalElectricityCost = (monthlyUsage / carRange) * electricityCost * 12 * yearsOwnership;
    const totalCost = carPrice + totalElectricityCost;
    return totalCost;
}

function displayTCOResult(totalCost) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <h3>Total Cost of Ownership</h3>
        <p>The total cost of ownership for the selected car type is: Rs${totalCost.toFixed(2)}</p>
    `;
}
