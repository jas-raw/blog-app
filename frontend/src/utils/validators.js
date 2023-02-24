export function PostValidator(obj){
	if(!obj || typeof obj !== "object") throw new Error("All fields are required")
	if(propertyValidator(obj, "username")) throw new Error("ImageUrl is required")
	if(propertyValidator(obj, "post")) throw new Error("ImageUrl is required")
	if(urlValidator(obj, "post")) throw new Error("ImageUrl must be an URL")
	if(propertyValidator(obj, "description")) throw new Error("Description is required")
}

function propertyValidator(obj, property){
	return !obj[property] || obj[property].trim().length === 0
}

function urlValidator(obj, property){
	return !obj[property].startsWith("https://");
}