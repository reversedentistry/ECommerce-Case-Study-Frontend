import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../features/authSlice";
import { RootState } from "../../redux/store";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

interface LoginValues {
    username: string; 
    password: string; 
}

function LoginPage() {
    const initialValues: LoginValues = {
        username: "",
        password: "",
    };

    const navigate = useNavigate();
    const dispatch = useAppDispatch(); 

    const handleSubmit = async(values: LoginValues) => {
        const response = await dispatch(loginUser(values)).unwrap();
        console.log(values); 
        
        if (response.httpStatus) {
            console.log(response);
            alert("There was an issue logging in.")
        } else {
            navigate("/shop"); 
        }
    }

    return (
        <div>
            <h2>Welcome back!</h2>
            <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}>
            {({values}) => (
                <Form>
                    <label>Username</label>
                    <Field id="username" name="username" value={values.username}/>
                    <label>Password</label>
                    <Field id="password" name="password" type="password" value={values.password}/>
                    <button type="submit" className="button is-small is-primary ml-3">Submit</button>
                </Form>
            )}    
            </Formik>
            <a href="/">New here?</a>
        </div>
    )
}

export default LoginPage