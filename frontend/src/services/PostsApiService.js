import axios from "axios";
import { apiEndpoint } from "../config/constants"

export class PostAPIService{

	apiUrl = apiEndpoint;
	
	async getAllPosts(){
		try{
			const url = this.apiUrl+ "/all"
			const { data } = await axios.get(url)
			return data
		}catch(e){
			console.log(e);
			return [];
		}
		
	}

	async createPost(obj){
		try {
			const url = this.apiUrl+ "/new"
			const { data } = await axios.post(url, obj)
			return data
		} catch (e) {
			console.log(e);
			return null;
		}
	}

	async updatePost(obj){
		try {
			const url = this.apiUrl+ "/update"
			const { data } = await axios.put(url, obj)
			return data
		} catch (e) {
			console.log(e);
			return null;
		}
	}

	async deletePost(id){
		try {
			const url = this.apiUrl+ `/delete/${id}`
			const { data } = await axios.delete(url)
			return data
		} catch (e) {
			console.log(e);
			return false;
		}
	}
}