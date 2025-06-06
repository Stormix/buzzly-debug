export type ToastTypes = "success" | "info" | "warning" | "error" | "normal";
export type ToastTheme = "light" | "dark";
export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

export interface ToastProps {
  message?: string;
  id?: string;
  toastAnimation?: (position : string) => {
    initial : object;
    animate : object;
    exit : object;
  };
  richColor?: boolean | false;
  theme?: ToastTheme;
  type: ToastTypes | "normal";
  position?: ToastPosition;
  description?: string;
  icon?: string;
  passPositionValue?: (position: string) => void;
}
