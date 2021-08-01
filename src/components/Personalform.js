import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Personalform = () => {
    const initialValues = {
        name: '',
        email: '',
        address: '',
        dob: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required')
            .max(25, 'Must be 25 characters or less'),
        email: Yup.string().email('Invalid email address')
            .required('Required'),
        address: Yup.string()
            .required('Required')
            .max(600, 'Must be 600 characters or less'),
        dob: Yup.date()
            .required('Required'),
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </div>
            <div className="form-group">
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="form-group">
                <TextField
                    id="address"
                    name="address"
                    label="Physical Address"
                    multiline
                    maxRows={4}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />

                {formik.errors.address ? <div>{formik.errors.address}</div> : null}
            </div>
            <div className="form-group">
                <TextField
                    id="dob"
                    name="dob"
                    type="date"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                    helperText={formik.touched.dob && formik.errors.dob}
                />
                {formik.errors.dob ? <div>{formik.errors.dob}</div> : null}
            </div>
            <div className="form-group">
                <Button
                    color="primary"
                    fullWidth
                    text="Submit"
                    type="submit"
                    variant="contained"
                >Submit</Button>
            </div>
        </form>
    );

};

export default Personalform;