interface UseFormProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent) => void;
}
import { Button } from "../../UI/Button";

export const UserForm = ({ children, onSubmit }: UseFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <Button
        id="button-submit"
        type="submit"
        text="submit"
        customClasses="cta"
      />
    </form>
  );
};
