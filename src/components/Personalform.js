import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Personalform = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const initialValues = {
        name: '',
        email: '',
        address: '',
        dob: '',
    }
    
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required')
            .max(15, 'Must be 15 characters or less'),
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
            {formik.errors.name ? <div>{formik.errors.name}</div>: null}
            
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
            {formik.errors.email ? <div>{formik.errors.email}</div>: null }

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

            {formik.errors.address ? <div>{formik.errors.address}</div> : null }
            <div className="form-group">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
                    <DatePicker
                        id="dob"
                        name="dob"
                        label="Date of Birth"
                        onChange={handleDateChange}
                        value={selectedDate}
                        error={formik.touched.dob && Boolean(formik.errors.dob)}
                        helperText={formik.touched.dob && formik.errors.dob}                     
                    />
                </MuiPickersUtilsProvider>
            {formik.errors.dob ? <div>{formik.errors.dob}</div> : null}
</div>
            <Button
                color="primary"
                fullWidth
                text="Submit"
                type="submit"
                variant="contained"  
            >Submit</Button>

        </form>
    );

};

export default Personalform;