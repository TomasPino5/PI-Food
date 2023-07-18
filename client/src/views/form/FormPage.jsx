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
    })

    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        healthScore: "",
        analyzedInstructions: "",
        image: "",
    })

    const diets = useSelector(state => state.diets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allDiets());
    }, [dispatch]);

    const validate = (form) => {
        if (/^.{3,40}$/.test(form.title)) {
            setErrors({ ...errors, title: "" })
        } else {
            setErrors({ ...errors, title: "Debe tener entre 3 y 40 caracteres" })
        }

        if (/^.{5,700}$/.test(form.summary)) {
            setErrors({ ...errors, summary: "" })
        } else {
            setErrors({ ...errors, summary: "Debe tener entre 5 y 700 caracteres" })
        }

        if (/^.{5,700}$/.test(form.healthScore)) { //!!
            setErrors({ ...errors, healthScore: "" })
        } else {
            setErrors({ ...errors, healthScore: "Debe ser un numero del 0 al 100" })
        }

        if (/^.{5,700}$/.test(form.analyzedInstructions)) { //!!
            setErrors({ ...errors, analyzedInstructions: "" })
        } else {
            setErrors({ ...errors, analyzedInstructions: "Debe tener entre 5 y 1500 caracteres" })
        }

        if (/^.{5,700}$/.test(form.image)) { //!!
            setErrors({ ...errors, image: "" })
        } else {
            setErrors({ ...errors, image: "Debe ser del tipo img" })
        }
    }

    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value

        validate({ ...form, [property]: value })

        setForm({ ...form, [property]: value })
    }

    const checkboxChangeHandler = (event) => {
        const { name, checked } = event.target; //checked indica si la checkbox esta marcada
        let updatedDiets = [...form.diets];

        if (checked) {
            updatedDiets.push(parseInt(name));
        } else {
            updatedDiets = updatedDiets.filter((diet) => diet !== parseInt(name));
        }

        setForm({ ...form, diets: updatedDiets });
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(createRecipe(form))
    }


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div>
                <label>Title: </label>
                <input type="text" value={form.title} onChange={changeHandler} name="title" />
                {errors.title && <span>{errors.title}</span>}
            </div>

            <div>
                <label>Description: </label>
                <input type="text" value={form.summary} onChange={changeHandler} name="summary" />
                {errors.summary && <span>{errors.summary}</span>}
            </div>

            <div>
                <label>Healthy food level (0 to 100): </label>
                <input type="number" value={form.healthScore} onChange={changeHandler} name="healthScore" />
            </div>

            <div>
                <label>Steps: </label>
                <input type="text" value={form.analyzedInstructions} onChange={changeHandler} name="analyzedInstructions" />
            </div>

            <div>
                <label>Image: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
            </div>

            <div>
                <label>Diets:</label>
                <br />
                {diets.map((diet) => (
                    <label key={diet.id}>
                    <input type="checkbox" name={diet.id} checked={form.diets.includes(diet.id)} onChange={checkboxChangeHandler}/>
                    {diet.name}
                    </label>
                ))}
            </div>

            <button type='submit'>SUBMIT</button>

        </form>
    )
}

export default FormPage;