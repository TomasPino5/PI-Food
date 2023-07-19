import styles from './FormPage.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, allDiets } from '../../redux/actions';

const FormPage = () => {
    const [form, setForm] = useState({
        title: "",
        summary: "",
        healthScore: "",
        analyzedInstructions: "",
        image: "",
        diets: [],
    });

    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        healthScore: "",
        analyzedInstructions: "",
        image: "",
    });

    const [touchedFields, setTouchedFields] = useState({
        title: false,
        summary: false,
        healthScore: false,
        analyzedInstructions: false,
        image: false,
    });

    const diets = useSelector(state => state.diets);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allDiets());
    }, [dispatch]);

    const validate = (property, value) => {
        let error = "";

        if (property === "title") {
            if (/^.{3,40}$/.test(value)) {
                error = "";
            } else {
                error = "Debe tener entre 3 y 40 caracteres";
            }
        }

        if (property === "summary") {
            if (/^.{5,700}$/.test(value)) {
                error = "";
            } else {
                error = "Debe tener entre 5 y 700 caracteres";
            }
        }

        if (property === "healthScore") {
            if (/^(100|[1-9]?[0-9])$/.test(value)) {
                error = "";
            } else {
                error = "Debe ser un numero del 0 al 100";
            }
        }

        if (property === "analyzedInstructions") {
            if (/^.{5,1500}$/.test(value)) {
                error = "";
            } else {
                error = "Debe tener entre 5 y 1500 caracteres";
            }
        }

        if (property === "image") {
            if (/^.*\.(jpg|jpeg|png|gif)$/.test(value)) {
                error = "";
            } else {
                error = "Debe ser una imagen";
            }
        }

        return error;
    };

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });
        setTouchedFields({ ...touchedFields, [property]: true });

        const error = validate(property, value);
        setErrors({ ...errors, [property]: error });
    };

    const checkboxChangeHandler = (event) => {
        const { name, checked } = event.target;
        let updatedDiets = [...form.diets];

        if (checked) {
            updatedDiets.push(parseInt(name));
        } else {
            updatedDiets = updatedDiets.filter((diet) => diet !== parseInt(name));
        }

        setForm({ ...form, diets: updatedDiets });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        let isValid = true;

        Object.keys(form).forEach((property) => { //Object.keys obtiene un array con las propiedades del objeto form
            const error = validate(property, form[property]);
            if (error) {
                isValid = false;
                setErrors({ ...errors, [property]: error });
            }
        });

        if (isValid) {
            dispatch(createRecipe(form));
            alert("Receta creada correctamente");
        } else {
            alert("Datos incorrectos")
        }
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>

            <div className={styles.propertyValue}>
                <label>Title: </label>
                <input
                    className={styles.input}
                    type="text"
                    value={form.title}
                    onChange={changeHandler}
                    onBlur={setTouchedFields}
                    name="title"
                />
                {touchedFields.title && errors.title && <span className={styles.errors}>{errors.title}</span>}
            </div>

            <div className={styles.propertyValue}>
                <label>Description: </label>
                <input
                    className={styles.input}
                    type="text"
                    value={form.summary}
                    onChange={changeHandler}
                    onBlur={setTouchedFields}
                    name="summary"
                />
                {touchedFields.summary && errors.summary && <span className={styles.errors}>{errors.summary}</span>}
            </div>

            <div className={styles.propertyValue}>
                <label>Healthy food level (0 to 100): </label>
                <input
                    className={styles.input}
                    type="number"
                    value={form.healthScore}
                    onChange={changeHandler}
                    onBlur={setTouchedFields}
                    name="healthScore"
                />
                {touchedFields.healthScore && errors.healthScore && <span className={styles.errors}>{errors.healthScore}</span>}
            </div>

            <div className={styles.propertyValue}>
                <label>Steps: </label>
                <input
                    className={styles.input}
                    type="text"
                    value={form.analyzedInstructions}
                    onChange={changeHandler}
                    onBlur={setTouchedFields}
                    name="analyzedInstructions"
                />
                {touchedFields.analyzedInstructions && errors.analyzedInstructions && (
                    <span className={styles.errors}>{errors.analyzedInstructions}</span>
                )}
            </div>

            <div className={styles.propertyValue}>
                <label>Image: </label>
                <input
                    className={styles.input}
                    type="text"
                    value={form.image}
                    onChange={changeHandler}
                    onBlur={setTouchedFields}
                    name="image"
                />
                {touchedFields.image && errors.image && <span className={styles.errors}>{errors.image}</span>}
            </div>

            <div className={styles.propertyValue}>
                <label>Diets:</label>
                <br />
                {diets.map((diet) => (
                    <label key={diet.id}>
                        <input
                            type="checkbox"
                            name={diet.id}
                            checked={form.diets.includes(diet.id)}
                            onChange={checkboxChangeHandler}
                        />
                        {diet.name}
                    </label>
                ))}
            </div>

            <button className={styles.submit} type="submit">SUBMIT</button>
        </form>
    );
};

export default FormPage;