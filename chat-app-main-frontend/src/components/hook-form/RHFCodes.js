import { Stack, TextField } from "@mui/material";
import React, { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFCodes = ({ keyName = "", inputs = [], ...other }) => {
  const codesRef = useRef(null);

  const { control } = useFormContext();

  const handleChangedWithNextField = (event, handleChange) => {
    const { maxLength, value, name } = event.target;
  
    const fieldIndex = name.replace(keyName, "");
    const fieldIntIndex = Number(fieldIndex);
  
    const nextField = document.querySelector(
      `input[name=${keyName}${fieldIntIndex + 1}]`
    );
  
    if (value.length > maxLength) {
      event.target.value = value.substring(0, maxLength);
    }
    if (value.length >= maxLength && fieldIntIndex < 6 && nextField !== null) {
      nextField.focus();
      nextField.select(); // Add this line to select the text in the next field
    }
  

    handleChange(event);
  };
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        ref={codesRef}
      >
        {inputs.map((name, index) => {
          return (
            <>
              <Controller
                key={name}
                name={`${keyName}${index + 1}`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    error={!!error}
                    autoFocus={index === 0 }
                    placeholder="-"
                    onChange={(event) => {
                      handleChangedWithNextField(event, field.onChange);
                    }}
                    onFocus={(event) => event.currentTarget.select()}
                    InputProps={{
                      sx: {
                        width: { xs: 36, sm: 56 },
                        height: { xs: 36, sm: 56 },
                        "& input": { p: 0, textAlign: "center" },
                      },
                    }}
                    inputProps={{
                      maxLength: 1,
                      type: "number",
                    }}
                    {...other}
                  />
                )}
              ></Controller>
            </>
          );
        })}
      </Stack>
    </>
  );
};

export default RHFCodes;
