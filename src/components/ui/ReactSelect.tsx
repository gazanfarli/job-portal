import React from "react";
import Select, { StylesConfig } from "react-select";
import Spinner from "./Spinner";

export interface IOption<T> {
  label: string;
  value: T;
}

type ReactSelectProps<T> = {
  value?: IOption<T> | null;
  label?: string;
  options: IOption<T>[];
  name?: string;
  placeholder?: string;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  noOptionsMessage?: string;
  onChange?: (newValue: IOption<T> | null) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const LoadingIndicator = () => <Spinner />;

const ReactSelect = <T,>({
  value,
  options,
  placeholder,
  isLoading = false,
  noOptionsMessage = "No Location",
  isSearchable = false,
  onBlur,
}: ReactSelectProps<T>) => {
  return (
    <Select
      value={value}
      options={options}
      placeholder={placeholder}
      onBlur={onBlur}
      isLoading={isLoading}
      styles={selectStyles}
      isSearchable={isSearchable}
      noOptionsMessage={() => noOptionsMessage}
      loadingMessage={() => "Loading..."}
      components={{ LoadingIndicator }}
    />
  );
};

export default ReactSelect;

const selectStyles: StylesConfig<IOption<any>> = {
  control: (styles) => ({
    ...styles,
    height: "40px",
    borderRadius: "6px",
    borderColor: "none",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
    cursor: "pointer",
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    height: "40px",
    alignContent: "center",
    backgroundColor: isSelected ? "#f2f2f7" : "default",
    color: isSelected ? "black" : "default",
    ":hover": { backgroundColor: "#f2f2f7" },
    cursor: "pointer",
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
  }),
  container: (styles) => ({
    ...styles,
    border: "none",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};
