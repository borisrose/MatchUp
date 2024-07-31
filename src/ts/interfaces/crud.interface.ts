interface Crud {
	create: (data: any) => Promise<any>
	read: (endpoint: string) => Promise<any>
	update: (data: any, endpoint: string) => Promise<any>
	delete: (endpoint: string) => Promise<any>
}

export default Crud
