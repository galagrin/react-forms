import './Form.css';
import { Formik, Form } from 'formik';
import { initialValues, schemas } from './helper';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const CustomForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schemas.custom}
            onSubmit={(values, { resetForm }) => {
                console.log('Success', values);
                resetForm(); // Сброс значений формы после отправки
            }}
        >
            <Form className="form">
                <h1>Форма регистрации</h1>
                <Input label="Имя" name="firstName" id="firstName" placeholder="Введите имя" />
                <Input
                    label="Фамилия"
                    name="lastName"
                    id="lastName"
                    placeholder="Введите фамилию"
                />
                <Input label="Email" name="email" id="email" placeholder="Введите email" />
                <Input
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                />

                <Button>Отправить</Button>
            </Form>
        </Formik>
    );
};
