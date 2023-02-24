import axios from "axios";
import { apiEndpoint } from "../config/constants"

export class PostAPIService{

	apiUrl = apiEndpoint;
	
	async getAllPosts(){
		const url = this.apiUrl+ "/all"
		const { data } = await axios.get(url)
		.catch(e => console.log(e))
		.finally(()=> [])
		return data
	}

	async createPost(obj){
		const url = this.apiUrl+ "/new"
		const { data } = await axios.post(url, obj)
		.catch(e => console.log(e))
		.finally(()=> null)
		return data
	}

	async updatePost(obj){
		const url = this.apiUrl+ "/update"
		const { data } = await axios.put(url, obj)
		.catch(e => console.log(e))
		.finally(()=> null)
		return data
	}

	async deletePost(id){
		const url = this.apiUrl+ `/delete/${id}`
		const { data } = await axios.delete(url)
		.catch(e => console.log(e))
		.finally(()=> false)
		return data
	}
}