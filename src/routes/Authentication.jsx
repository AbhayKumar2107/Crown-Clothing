import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const Authentication = () => {
    return (
        <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;
