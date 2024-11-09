import * as Yup from 'yup';

const regx = {
    name: /^[а-яА-Яa-zA-Z]{2,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
    password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
};

const firstName = Yup.string()
    .matches(regx.name, 'Кириллица латиница от 2 до 20 символов')
    .required('Введите имя');

const lastName = Yup.string()
    .matches(regx.name, 'Кириллица латиница от 2 до 20 символов')
    .required('Введите фамилию');

const email = Yup.string().matches(regx.email, 'Формат example@mail.com').required('Введите email');
const password = Yup.string()
    .matches(
        regx.password,
        'пароль должен был не менее 8 символов, содержать строчные и прописные буквы и символы',
    )
    .required('Неверный формат пароля');

export const schemas = {
    custom: Yup.object().shape({
        firstName,
        lastName,
        email,
        password,
    }),
};

export const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};
