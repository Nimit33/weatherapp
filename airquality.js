const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8253a85003msh76ccfa8278a0296p1d0282jsn289b3365c50d',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}