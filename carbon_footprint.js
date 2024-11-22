
// document.getElementById('carbonForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const dailyTravel = parseFloat(document.getElementById('dailyTravel').value);
//     const distance = parseFloat(document.getElementById('distance').value);
//     const transport = document.getElementById('transport').value;

//     let carbonFootprint;

//     // Calculate carbon footprint based on means of transport
//     switch (transport) {
//         case 'car':
//             carbonFootprint = 0.2 * dailyTravel * distance;
//             break;
//         case 'motorbike':
//             carbonFootprint = 0.1 * dailyTravel * distance;
//             break;
//         case 'bus':
//             carbonFootprint = 0.05 * dailyTravel * distance;
//             break;
//         case 'metro':
//             carbonFootprint = 0.03 * dailyTravel * distance;
//             break;
//         case 'shared_taxi':
//             carbonFootprint = 0.08 * dailyTravel * distance; // Adjusted for shared taxi
//             break;
//         default:
//             carbonFootprint = 0;
//     }

//     document.getElementById('result').innerHTML = `Your carbon footprint: ${carbonFootprint.toFixed(2)} kg CO2e per day`;
// });


// document.getElementById('carbonForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const dailyTravel = parseFloat(document.getElementById('dailyTravel').value);
//     const distance = parseFloat(document.getElementById('distance').value);
//     const transport = document.getElementById('transport').value;

//     let carbonFootprint;

//     // Calculate carbon footprint based on means of transport
//     switch (transport) {
//         case 'car':
//             carbonFootprint = 0.2 * dailyTravel * distance;
//             break;
//         case 'motorbike':
//             carbonFootprint = 0.1 * dailyTravel * distance;
//             break;
//         case 'bus':
//             carbonFootprint = 0.05 * dailyTravel * distance;
//             break;
//         case 'metro':
//             carbonFootprint = 0.03 * dailyTravel * distance;
//             break;
//         case 'shared_taxi':
//             carbonFootprint = 0.08 * dailyTravel * distance;
//             break;
//         case 'bicycle':
//             carbonFootprint = 0; // No carbon footprint for bicycle
//             break;
//         case 'walking':
//             carbonFootprint = 0; // No carbon footprint for walking
//             break;
//         default:
//             carbonFootprint = 0;
//     }

//     document.getElementById('result').innerHTML = `Your carbon footprint: ${carbonFootprint.toFixed(2)} kg CO2e per day`;
// });


document.getElementById('carbonForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const dailyTravel = parseFloat(document.getElementById('dailyTravel').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const transport = document.getElementById('transport').value;

    let carbonFootprint;

    // Calculate carbon footprint based on means of transport
    switch (transport) {
        case 'car':
            carbonFootprint = 0.192 * dailyTravel * distance; // CO2 emissions for car per km: 192 gm
            break;
        case 'motorbike':
            carbonFootprint = 0.133 * dailyTravel * distance; // CO2 emissions for bike per km: 133 gm
            break;
        case 'bus':
            carbonFootprint = 0.822 / 30 * dailyTravel * distance; // CO2 emissions for bus per km: 822 gm
            break;
        case 'metro':
            carbonFootprint = 3.4 / 500 * dailyTravel * distance; // CO2 emissions for metro per km: 52 gm
            break;
        case 'shared_taxi':
            carbonFootprint = 0.192 / 4 * dailyTravel * distance; // Assuming CO2 emissions for shared taxi per km: 80 gm
            break;
        case 'bicycle':
            carbonFootprint = 0; // No carbon footprint for bicycle
            break;
        case 'walking':
            carbonFootprint = 0; // No carbon footprint for walking
            break;
        default:
            carbonFootprint = 0;
    }

    document.getElementById('result').innerHTML = `Your carbon footprint: ${carbonFootprint.toFixed(2)} kg CO2e per day`;
});
