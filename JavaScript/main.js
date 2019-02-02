const ById = (id, value) => {
	document.getElementById(id).innerHTML = value
};
const gettingWeather = () => {
	const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
	const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57';
	const inputValue = document.getElementById('input').value;
	const state = {
		city: undefined,
		temperature: undefined,
		country: undefined,
	};
	if(inputValue) {
		ById('errorMessage', '');
		fetch(`${API_URL}${inputValue}&appid=${API_KEY}&units=metric`)
		.then(resp => resp.json())
		.then(data => {
			console.log(data)
			state.temperature = data.main.temp;
			ById('temp',state.temperature);
			state.city = data.name;
			ById('city', state.city);
			state.country = data.sys.country;
			ById('country', state.country);
		})
		.catch(err => {
			ById('errorMessage', 'The requested URL/error was not found this server');
			ById('temp','');
			ById('city', '');
			ById('country', '');
		})
	}else {
		ById('errorMessage', 'Please enter the city name');

	}
};
