import {useField} from 'formik'

function Textare(props) {
    const [field, meta, helpers] = useField(props.name);
    return (
      <>
        <textarea {...field} {...props} 
        className=" px-2 py-2"
        />
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </>
    );
  }


  export default Textare