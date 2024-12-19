/* eslint-disable react/prop-types */
import { useField, useFormikContext } from "formik";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function CountryDropdown({ name }) {
    const { setFieldValue } = useFormikContext(); 
    const [field, meta] = useField(name);
    const options = countryList().getData();

    const changeHandler = (selectedOption) => {
        setFieldValue(name, selectedOption);
    };

    return (
        <div className="form-control">
            <Select
                options={options}
                value={field.value}
                onChange={changeHandler}
                placeholder="Select a Country"
                className={meta.touched && meta.error ? "errorInput" : ""}
                styles={meta.touched && meta.error ? { color: "#fff" } : {}}
            />

            {meta.touched && meta.error && (
                <span className="error">{meta.error}</span>
            )}
        </div>
    );
}
