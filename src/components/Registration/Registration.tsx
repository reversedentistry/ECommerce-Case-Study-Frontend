import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { registerUser } from "../../features/authSlice";
import { RootState } from "../../redux/store";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

interface RegistrationValues {
    username: string; 
    password: string; 
}

function RegistrationPage() {
    const initialValues: RegistrationValues = {
        username: "",
        password: "",
    };
    
    const navigate = useNavigate();
    const dispatch = useAppDispatch(); 
    const auth = useAppSelector((state: RootState) => state.auth);

    const handleSubmit = async(values: RegistrationValues) => {
        const response = await dispatch(registerUser(values)).unwrap();
        console.log(values); 
        
        if (response.httpStatus) {
            console.log(response);
        } else {
            navigate("/shop"); 
        }
    }

    return (
        <div>
            <h2>Welcome, new customers!</h2>
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
            <a href="/login">Shopped with us before?</a>
        </div>
    )
    
} 

export default RegistrationPage; 