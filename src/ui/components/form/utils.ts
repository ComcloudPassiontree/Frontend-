import { BaseInputComponentProps } from "../types";

export const removeCustomProps = (props: BaseInputComponentProps) => {
  const newProps = {...props}
    const propertiesToRemove: (keyof BaseInputComponentProps)[] = [
        "testId",
        "hasError",
        "errorText",
        "hasSuccess",
        "successText",
      ];
    
      propertiesToRemove.forEach(property => {
          delete newProps[property]; // Remove the property if it exists
      });
    
      return newProps; // Return the modified object
}