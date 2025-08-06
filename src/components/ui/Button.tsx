import React, { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ripple-effect",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-primary  hover:bg-primary hover:text-white transition-all duration-300",
    // outline: "bg-transparent border-1 border-red-500 hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-white hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
};

const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant = "default",
    size = "default",
    className = "",
    ...props
}, ref) => {

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return <button ref={ref} className={classes} {...props} />;
}
);

export default Button;