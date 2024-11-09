import './Input.css';
import { Field, ErrorMessage as Error } from 'formik';

export const Input = ({ id, label, name, placeholder, type }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <Field name={name} id={id} placeholder={placeholder} type={type} />
            <Error name={name}>{(error) => <span>{error}</span>}</Error>
        </div>
    );
};
