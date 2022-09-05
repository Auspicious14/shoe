import { Box, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { ErrorMessage, Field, useField } from "formik";
import React, { useEffect } from "react";

interface IProps {
  label?: string;
  name: string;
  type: string;
  placeHolder?: string;
  className?: {};
}
export const ApTextInput: React.FC<IProps> = ({
  label,
  type,
  name,
  placeHolder,
  className,
}) => {
  return (
    <>
      <Box>
        <FormLabel>{label}</FormLabel>
        {type === "textarea" ? (
          <Textarea placeholder={placeHolder} name={name} rows={4}></Textarea>
        ) : (
          <Field
            type={type}
            name={name}
            placeholder={placeHolder}
            style={{
              marginBottom: ".5rem",
              padding: ".5rem",
              width: "100%",
              border: ".1rem solid rgba(0, 0, 0, 0.1)",
              focus: ".1rem solid #1778F2",
              borderRadius: ".3rem",
              color: "black",
              className: className,
            }}
          ></Field>
        )}
        <ErrorMessage className="text-red-500" name={name} component="Box" />
      </Box>
    </>
  );
};
