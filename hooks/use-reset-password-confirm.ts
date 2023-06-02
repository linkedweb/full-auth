import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useResetPasswordConfirmMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useResetPasswordConfirm(uid: string, token: string) {
	const router = useRouter();

	const [resetPasswordConfirm, { isLoading }] =
		useResetPasswordConfirmMutation();

	const [formData, setFormData] = useState({
		new_password: '',
		re_new_password: '',
	});

	const { new_password, re_new_password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		resetPasswordConfirm({ uid, token, new_password, re_new_password })
			.unwrap()
			.then(() => {
				toast.success('Password reset successful');
				router.push('/auth/login');
			})
			.catch(() => {
				toast.error('Password reset failed');
			});
	};

	return {
		new_password,
		re_new_password,
		isLoading,
		onChange,
		onSubmit,
	};
}
