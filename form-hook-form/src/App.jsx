import { Controller, useForm } from 'react-hook-form';
import './App.css';

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset,
        setValue,
        watch,
        control,
    } = useForm({
        defaultValues: {
            age: 18,
        },
    });

    const submit = (data) => {
        console.log(data);
    };
    const error = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(submit, error)}>
                <input
                    type="text"
                    {...register('name', { required: true })}
                    aria-invalid={errors.name ? true : false}
                    placeholder="введите имя"
                />
                <Controller
                    name="age"
                    control={control}
                    render={({ field }) => <input {...field} />}
                />
                <input type="number" {...register('age')} />
                <button type="submit">Отправить</button>
                <button
                    type="button"
                    onClick={() =>
                        reset({
                            age: 0,
                            name: '',
                        })
                    }
                >
                    Очистить форму
                </button>
                <button type="button" onClick={() => clearErrors()}>
                    Очистить ошибки
                </button>
                <button type="button" onClick={() => setValue('name', 'Елена')}>
                    Установить имя
                </button>
            </form>
            {watch('age')}
        </>
    );
}

export default App;
