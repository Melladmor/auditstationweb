export interface ButtonI {
  onClick: () => void;
  title: string;
  icon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}
