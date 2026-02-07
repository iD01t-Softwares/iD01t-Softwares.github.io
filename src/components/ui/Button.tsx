import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/20",
      secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "text-foreground hover:bg-white/10",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5",
      lg: "px-8 py-3 text-lg font-semibold",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
