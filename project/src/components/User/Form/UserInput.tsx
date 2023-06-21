interface UserInputProps {
  id: string;
  type: "text" | "number" | "email" ;
  value: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const UserInput = ({
  label,
  id,
  type,
  value,
  placeholder,
  isRequired,
  onChange,
}: UserInputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
      />
    </>
  );
};
