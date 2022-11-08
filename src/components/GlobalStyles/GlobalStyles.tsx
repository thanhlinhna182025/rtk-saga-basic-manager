import './GlobalStyles.module.scss';

interface GlobalStylesProps {
  children: JSX.Element;
}

export const GlobalStyles = ({ children }: GlobalStylesProps) => {
  return children;
};
