import './Form.css';

export const Form = ({
    handleFormSubmit,
    dirtyInput,
    error,
    inputState,
    checked,
    handleInput,
    handleBlur,
    handleCheckboxChange,
}) => {
    return (
        <form onSubmit={handleFormSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name">Введите имя:</label>
                {dirtyInput.name && error.name && <div style={{ color: 'red' }}>{error.name}</div>}
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
                {dirtyInput.text && error.text && <div style={{ color: 'red' }}>{error.text}</div>}
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
    );
};
