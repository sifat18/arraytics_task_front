import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  labelStyle?: object;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  name,
  size = "large",
  placeholder = "select",
  options,
  label,
  handleChange,
  labelStyle = {},
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? <p style={labelStyle}>{label}</p> : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
