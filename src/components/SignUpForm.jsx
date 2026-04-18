import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase';
import FormInput from './FormInput';
import Button from './Button';

const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { name });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot Create User, Email already in use");
            }
            console.error("user creation encounter an error", error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="rounded-3xl border border-white/60 bg-white/80 p-4 shadow-[0_18px_40px_rgba(120,113,108,0.12)] backdrop-blur sm:rounded-[1.75rem] sm:p-6 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_18px_40px_rgba(2,6,23,0.35)]">
            <h1 className="text-xl font-semibold text-stone-900 sm:text-2xl dark:text-stone-100">Don&apos;t have an account?</h1>
            <h3 className="mt-2 text-sm text-stone-600 dark:text-stone-300">Create one with your email and password</h3>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <div className="mt-6 space-y-4">
                <FormInput
                    label="Name"
                    type="text"
                    required onChange={handleChange}
                    name="name"
                    value={name}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                </div>

                <div className="mt-6">
                    <Button type="submit" buttonType="normal" >Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
