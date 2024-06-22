/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";

const CustomButton = ({
  children,
  isDisabled,
  size,
  radius,
  color,
  variant,
  isLoading,
  className,
  type,
  name,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      name={name}
      type={type}
      color={color}
      size={size}
      isDisabled={isDisabled}
      radius={radius}
      variant={variant}
      isLoading={isLoading}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CustomButton;