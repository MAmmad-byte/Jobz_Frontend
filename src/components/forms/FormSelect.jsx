import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

export default function FormSelect({
  name,
  type,
  label,
  register,
  placeholder,
  errors,
  options,
}) {
  let color = errors[name] && "red";
  return (
    <FormControl mt={5} color={"#000"}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select name={name} {...register(name)} color={"#000"} placeholder={placeholder}>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </Select>
      {errors[name] && (
        <FormHelperText color={"red"}>{errors[name]?.message}</FormHelperText>
      )}
    </FormControl>
  );
}
