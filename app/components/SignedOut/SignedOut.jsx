import { UserAuth } from '@/app/js/AuthContext';
import Button from '../Button/Button';
import styles from './SignedOut.module.css';

export default function SignedOut() {
    const { googleSignIn } = UserAuth();

    async function handleSignIn() {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <h1>You are not signed-in 😢</h1>
            <div className={styles.auth_buttons}>
                <Button onClick={handleSignIn}>LOGIN</Button>
                <p>or</p>
                <Button onClick={handleSignIn}>SIGN-UP</Button>
            </div>
        </div>
    );
}
