import FormItem from "./FormItem";

import "../App.css";

function Form({ step }) {
  return (
    <div>
      {step.fields?.map((field) => (
        <div key={field.id}>
          <FormItem {...field} />
        </div>
      ))}
    </div>
  );
}

export default Form;
