import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group bg-stone-300"
      icons={{
        success: (
          <img
            src="/images/icons/check-circle.svg"
            alt="Success"
            className="size-4"
          />
        ),
        info: (
          <img
            src="/images/icons/information-circle.svg"
            alt="Info"
            className="size-4"
          />
        ),
        warning: (
          <img
            src="/images/icons/exclamation-triangle.svg"
            alt="Warning"
            className="size-4"
          />
        ),
        error: (
          <img src="/images/icons/x-mark.svg" alt="Error" className="size-4" />
        ),
        loading: (
          <img
            src="/images/icons/arrow-path.svg"
            alt="Loading"
            className="size-4 animate-spin"
          />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
