<script lang="ts">
	import { z } from 'zod';
	import { TextInput, Button } from 'carbon-components-svelte';

	let errors: Record<string, string[] | undefined> | undefined;

	export const loginSchema = z.object({
		email: z.string().email({ message: 'Invalid email address' }),
		password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
	});

	let email: string | undefined, password: string | undefined;

	const submit = async () => {
		/*const formEl = event.target as HTMLFormElement
        const data = new FormData(formEl)
        console.log(formEl.action)
        const response = await fetch(formEl.action, {
      method: 'POST',
      body: data
    })
    const responseData = await response.json()
    console.log(responseData)*/

		const values = {
			email,
			password
		};
		errors = undefined;
		const parsed = loginSchema.safeParse(values);
		if (!parsed.success) {
			errors = parsed.error.flatten().fieldErrors;
		} else {
		}
	};
</script>

<h1>User Auth Login</h1>

<form method="POST" on:submit|preventDefault={submit}>
	<TextInput
		type="email"
		name="email"
		placeholder="Email Address"
		bind:value={email}
		invalid={!!errors?.email?.[0]}
		invalidText={errors?.email?.[0]}
	/>
	<TextInput
		type="password"
		name="password"
		placeholder="Password"
		bind:value={password}
		invalid={!!errors?.password?.[0]}
		invalidText={errors?.password?.[0]}
	/>
	<Button type="submit">Log In</Button>
</form>
