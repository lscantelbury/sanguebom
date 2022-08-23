import { TextInput } from "./style";

/* 
Reusable component for an input field. 
Its style variants are implemented in ./style.js. 
It has a 'default' styling, but many styles can be created 
and passed as props
*/

export default function InputField({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  variant = "default",
  ...props
}) {
  return (
    <TextInput
      variant={variant}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor="#fff"
      {...props}
    />
  );
}
