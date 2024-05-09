
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			naves: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					setStore({ personajes: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					setStore({ planetas: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			obtenerNaves: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/starships")
					const data = await response.json()
					setStore({ naves: data.results })
				} catch (error) {
					console.log(error)
				}
			},

		}
	};
};

export default getState;
