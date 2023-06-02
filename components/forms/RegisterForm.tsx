'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
	const {
		first_name,
		last_name,
		email,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();

	const config = [
		{
			labelText: 'First name',
			labelId: 'first_name',
			type: 'text',
			value: first_name,
			required: true,
		},
		{
			labelText: 'Last name',
			labelId: 'last_name',
			type: 'text',
			value: last_name,
			required: true,
		},
		{
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
		{
			labelText: 'Confirm password',
			labelId: 're_password',
			type: 'password',
			value: re_password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Sign up'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
