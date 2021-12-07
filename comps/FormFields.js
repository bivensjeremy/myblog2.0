import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <label className="form-label" htmlFor={field.name}>{label}</label>
            <input 
                placeholder={label}
                className={`form-control form-control-lg ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            
            <ErrorMessage name={field.name} className="fs-6 text-danger" component="div" />
        </div>
    );
}

const OptionField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <label className="form-label" htmlFor={field.name}>{label}</label>
            <select 
                className={`form-select form-select-lg ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            >
                <option defaultValue>Select Type...</option>
                <option value="Text Post">Text Post</option>
                <option value="Video">Video</option>
                <option value="Service">Something Else</option>
            </select>
            
            <ErrorMessage name={field.name} className="fs-6 text-danger" component="div" />
        </div>
    );
}

const MessageField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <label className="form-label" htmlFor={field.name}>{label}</label>
            <textarea 
                placeholder="Write Something..."
                rows="8"
                className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            
            <ErrorMessage name={field.name} className="text-danger" component="div" />

        </div>
    );
}

const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <label className="" htmlFor={field.name}>{label}</label>
            <input 
                placeholder={label}
                className={`form-control form-control-lg ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            
            <ErrorMessage name={field.name} className="fs-6 text-danger" component="div" />
        </div>
    );
}

export default TextField;
export { OptionField, MessageField, InputField };