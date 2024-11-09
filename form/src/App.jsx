import { useState } from 'react';
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
        <div>
            <form onSubmit={handleFormSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Введите имя:</label>
                    {dirtyInput.name && error.name && (
                        <div style={{ color: 'red' }}>{error.name}</div>
                    )}
                    <input
                        id="name"
                        type="text"
                        required
                        value={inputState.name || ''}
                        name="name"
                        placeholder="введите имя"
                        onChange={(e) => handleInput(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Пароль:</label>
                    {dirtyInput.email && error.email && (
                        <div style={{ color: 'red' }}>{error.email}</div>
                    )}
                    <input
                        id="email"
                        type="email"
                        value={inputState.email || ''}
                        name="email"
                        placeholder="введите email"
                        onChange={(e) => handleInput(e)}
                        onBlur={(e) => handleBlur(e)}
                    ></input>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Тема запроса:</label>
                    <select
                        id="category"
                        value={inputState.category || ''}
                        onChange={(e) => handleInput(e)}
                    >
                        <option value="deposit">вопрос по вкладу</option>
                        <option value="credit">вопрос по кредиту</option>
                        <option value="transfer">вопрос по переводу</option>
                        <option value="others">прочее</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Текст запроса:</label>
                    {dirtyInput.text && error.text && (
                        <div style={{ color: 'red' }}>{error.text}</div>
                    )}
                    <textarea
                        placeholder="Введите Ваш запрос"
                        id="text"
                        value={inputState.text}
                        name="text"
                        onChange={(e) => handleInput(e)}
                        onBlur={(e) => handleBlur(e)}
                    ></textarea>
                </div>

                <div className="form-group checkbox">
                    <label>
                        <input type="checkbox" onChange={handleCheckboxChange} checked={checked} />
                        Подтверждаю согласние на обработку персональных данных
                    </label>
                </div>

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default App;
