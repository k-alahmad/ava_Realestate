import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Key": "d00056ab7emsh74604a47767b11ap12a6a3jsnea8308bfdae1",
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
		},
	});
	return data;
};
