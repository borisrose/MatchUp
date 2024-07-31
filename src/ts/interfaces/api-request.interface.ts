interface ApiRequest {
	get: (endpoint: string, token?: string) => Promise<any>
	post: (
		data: any,
		endpoint: string,
		token?: string,
		method?: string,
	) => Promise<any>
}

export default ApiRequest
