import axios from "axios";

export const tagsDataFetch =(url)=>{
	const response = axios.get(url)
	return response
}