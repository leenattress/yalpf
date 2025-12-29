import React from "react";
import { ButtonProps } from "./types";
import { StyledButton, LoadingSpinner, IconWrapper } from "./styled";

/**
 * Button Component
 * 
 * CTA-optimized button for landing pages following best practices:
 * 
 * - **Action-oriented**: Design for verbs like "Get", "Start", "Join", "Try"
 * - **Benefit-focused**: Use text like "Get My Free Guide" not "Submit"
 * - **Accessible**: 44x44px minimum touch target, keyboard navigable
 * - **Visual prominence**: Primary variant for main CTAs
 * - **Loading states**: Built-in support for async actions
 * - **Flexible sizing**: Small, medium (default), large options
 * 
 * @example
 * ```tsx
 * // Primary CTA (default)
 * <Button>Get Started Free</Button>
 * 
 * // Secondary action
 * <Button variant="secondary">Learn More</Button>
 * 
 * // With loading state
 * <Button isLoading>Processing...</Button>
 * 
 * // Large prominent CTA
 * <Button size="large">Start Free Trial</Button>
 * 
 * // With icons
 * <Button iconAfter={<ArrowIcon />}>Continue</Button>
 * ```
 */
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  isLoading = false,
  iconBefore,
  iconAfter,
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $isLoading={isLoading}
      disabled={disabled || isLoading}
      data-testid="button"
      {...props}
    >
      {isLoading && <LoadingSpinner data-testid="loading-spinner" />}
      {!isLoading && iconBefore && (
        <IconWrapper data-testid="icon-before">{iconBefore}</IconWrapper>
      )}
      {children}
      {!isLoading && iconAfter && (
        <IconWrapper data-testid="icon-after">{iconAfter}</IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
