import { useState } from 'react'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase';
import FormInput from './FormInput';
import Button from './Button';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with the email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="rounded-3xl border border-white/60 bg-white/80 p-4 shadow-[0_18px_40px_rgba(120,113,108,0.12)] backdrop-blur sm:rounded-[1.75rem] sm:p-6 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_18px_40px_rgba(2,6,23,0.35)]">
            <h1 className="text-xl font-semibold text-stone-900 sm:text-2xl dark:text-stone-100">Already have an account?</h1>
            <h3 className="mt-2 text-sm text-stone-600 dark:text-stone-300">Sign in with your email and password</h3>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <div className="mt-6 space-y-4">
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
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" buttonType="normal" >Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
