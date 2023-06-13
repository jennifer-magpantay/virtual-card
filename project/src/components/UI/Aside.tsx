interface AsideProps {
  customClasses: string;
  children: React.ReactNode;
}
export const Aside = ({ customClasses, children }: AsideProps) => {
  return <aside className={customClasses}>{children}</aside>;
};
