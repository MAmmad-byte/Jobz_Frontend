import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export default function FormInput({name, type, label, register,placeholder, errors}) {
    let color = errors[name] && "red"
  return (
    <FormControl    mt={5} color={"#000"}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        borderColor={color}
        focusBorderColor="#4FD1C5"
      />
      {errors[name] && (
        <FormHelperText color={"red"}>
          {errors[name]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}
