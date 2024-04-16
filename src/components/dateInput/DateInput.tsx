import React from "react";

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
  textTransform: "capitalize",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  backgroundColor: "var(--color-4)",
  ...generalStyle,
};

type DateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

export const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <label id="dateLabel" style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input style={inputStyle} id={label} type="date" {...props} />
    </div>
  );
};
