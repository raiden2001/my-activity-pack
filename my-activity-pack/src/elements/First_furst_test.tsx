import * as React from "react";
import { FormElementProps, FormElementRegistration } from "@vertigis/workflow";

/**
 * The generic type argument provided to `FormElementProps<T>` controls the type
 * of `props.value` and `props.setValue(value)`. If your element doesn't need a
 * `value`, you can omit the type argument.
 *
 * You can also declare additional public properties of your element by adding
 * properties to this interface. The properties will be managed by the Workflow
 * runtime, and passed in as `props`. You can update the properties by using
 * `props.setProperty(key, value)`.
 */
interface First_furst_testProps extends FormElementProps<string> {}

/**
 * A Workflow element built using React.
 * @displayName First_furst_test
 * @description test
 * @param props The props that will be provided by the Workflow runtime.
 */
function First_furst_test(props: First_furst_testProps): React.ReactElement {
    const { setValue, value } = props;
    return (
        <input
            onChange={(event) => setValue(event.currentTarget.value)}
            value={value}
        />
    );
}

const First_furst_testElementRegistration: FormElementRegistration<First_furst_testProps> = {
    component: First_furst_test,
    getInitialProperties: () => ({ value: "Hello World" }),
    id: "First_furst_test",
};
console.log("First_furst_test initialized");
console.log("First_furst_testElementRegistration:", First_furst_testElementRegistration);
console.log(First_furst_testElementRegistration.getInitialProperties());
export default First_furst_testElementRegistration;
