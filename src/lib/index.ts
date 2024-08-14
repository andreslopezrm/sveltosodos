// place files you want to import through the `$lib` alias in this folder.

import type { Cookies } from '@sveltejs/kit';

export class ApiClient {
	get() {
		return 'Get desde';
	}
}

export class BlogService {
	constructor(private readonly apiClient: ApiClient) {}
	show() {
		console.log(this.apiClient.get());
	}
}

export const provideBlogService = () => new BlogService(new ApiClient());

export const setAuthToken = ({ cookies, token }: { cookies: Cookies; token: string }) => {
	cookies.set('AuthorizationToken', token, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24,
		path: '/'
	});
};
