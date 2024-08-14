import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const formData = await request.formData();
	cookies.set('galleta', 'valor galleta', {
		httpOnly: true,
		secure: true,
		path: '/',
		maxAge: 60 * 60 // 1 hora
	});
	console.log(formData);

	return json({ status: 'ok' });
};
