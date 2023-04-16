import React from "react";
import { TextField, TextFieldProps, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export interface IInputTextFieldProps {
  fullWidth?: boolean;
  size?: Pick<TextFieldProps, "size">["size"];
  inputStyle?: Pick<TextFieldProps, "sx">["sx"];
  label?: string;
  name?: string;
  id?: string;
  variant?: Pick<TextFieldProps, "variant">["variant"];
  error?: boolean;
  errorMessage?: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function InputTextField(props: IInputTextFieldProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  function onTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (props?.onTextChange!) {
      props?.onTextChange(event);
    }
  }

  return (
    <TextField
      fullWidth={props?.fullWidth}
      size={props?.size}
      sx={{ ...props?.inputStyle }}
      name={props?.name}
      label={props?.label}
      id={props?.id}
      onChange={onTextChange}
      variant={props?.variant}
      error={props?.error}
      helperText={props?.errorMessage}
      required={props?.required}
      type={
        props?.type === "password"
          ? showPassword
            ? "text"
            : props?.type
          : props?.type
      }
      InputProps={{
        endAdornment: props?.type === "password" && (
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
            color={props?.error ? "error" : "primary"}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        ),
      }}
    />
  );
}

export default InputTextField;
