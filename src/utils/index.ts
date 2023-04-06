export function queryFn<T>(
	url: RequestInfo | URL,
	method: string,
	token?: string,
	body?: BodyInit
): Promise<T> {
	const headers: HeadersInit = new Headers();
	headers.set("Content-Type", "application/json");
	headers.set("Authorization", "Client-ID" + " " + token);

	let options = {
		method: method,
		headers: headers,
		body: body,
		Credentials: "include",
	};

	return fetch(url, options).then((res) => res.json() as Promise<T>);
}
