import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate()

    const handleContinue = () => {
        navigate('/home');
    }

    return (
        <div>
            <h1>PI FOODS</h1>
            <p>BY: TOMAS PINO</p>
            <button onClick={handleContinue}>CONTINUAR</button>
        </div>
    )
}

export default LandingPage;