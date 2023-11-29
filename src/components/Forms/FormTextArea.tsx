import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  labelStyle?: object;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  labelStyle = {},
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      {label ? <p style={labelStyle}>{label}</p> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
