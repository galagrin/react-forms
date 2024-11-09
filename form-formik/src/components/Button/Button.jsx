import './Button.css';

export const Button = ({ children }) => {
    return (
        <button type="submit" className="button">
            {children}
        </button>
    );
};
