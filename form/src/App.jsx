import { useState } from 'react';
import { Form } from './components/Form/Form';
import './App.css';

function App() {
    const [inputState, setInputState] = useState({
        name: '',
        email: '',
        category: 'deposit',
        text: '',
    });

    const [dirtyInput, setDirtyInput] = useState({
        name: false,
        email: false,
        text: false,
    });

    const [error, setError] = useState({
        name: '',
        email: '',
        text: '',
    });

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked((prev) => !prev);
    };

    const handleBlur = (e) => {
        setDirtyInput((prev) => ({ ...prev, [e.target.name]: true }));

        // Проверка ошибок
        if (e.target.name === 'name' && !inputState.name) {
            setError((prev) => ({ ...prev, name: 'имя не может быть пустым' }));
        } else if (e.target.name === 'email') {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(String(inputState.email).toLowerCase())) {
                setError((prev) => ({ ...prev, email: 'email не корректен' }));
            } else {
                setError((prev) => ({ ...prev, email: '' }));
            }
        } else if (e.target.name === 'text' && !inputState.text) {
            setError((prev) => ({ ...prev, text: 'поле запроса не может быть пустым' }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!inputState.name && !inputState.password && !inputState.text) {
            console.log(1);
            return;
        }
        console.log(inputState.name.toUpperCase());
        console.log(inputState.email);
        console.log(checked);
        console.log(inputState.text);
        alert(`Ваше сообщение с текстом '${inputState.text.toLowerCase()}' отправлено`);
        setInputState({
            name: '',
            password: '',
            category: 'deposit',
            text: '',
        });
        setChecked(false);
    };

    const handleInput = (e) => {
        const value = e.target.value;
        setInputState({ ...inputState, [e.target.name]: value });

        // Сброс ошибок при вводе данных
        if (e.target.name === 'name' && value) {
            setError((prev) => ({ ...prev, name: '' }));
        } else if (e.target.name === 'email') {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(String(value).toLowerCase())) {
                setError((prev) => ({ ...prev, email: 'email не корректен' }));
            } else {
                setError((prev) => ({ ...prev, email: '' }));
            }
        } else if (e.target.name === 'text' && value) {
            setError((prev) => ({ ...prev, text: '' }));
        }
    };

    return (
        <div className="formwrapper">
            <Form
                handleFormSubmit={handleFormSubmit}
                dirtyInput={dirtyInput}
                error={error}
                inputState={inputState}
                checked={checked}
                handleInput={handleInput}
                handleBlur={handleBlur}
                handleCheckboxChange={handleCheckboxChange}
            />
        </div>
    );
}

export default App;
