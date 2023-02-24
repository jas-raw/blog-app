import React, {createContext, useContext, useState} from 'react';

const initialState = {
	loading: false,
	posts: [],
	detailPost: null,
	postChanges: null,
	editingPost: false,
};

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {

	const [data, setData] = useState(initialState);
	const value = {data, setData};

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	);
}

export const useDataContext = () => {
	const {data} = useContext(Context);
	if(!data){
		throw new Error("No context provider is used");
	}
	return data;
}

export const useModifierContext = () => {
	const { data, setData } = useContext(Context);
	if(!setData){
		throw new Error("No context provider is used");
	}
	return (props) => setData({...data, ...props});
}