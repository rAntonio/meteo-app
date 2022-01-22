import { useState } from 'react';
import './LocationInput.css';

export interface LocationInputProps {
  placeholder: string;
  onSubmit : (input : string) => void;
  className?: string;
};

const LocationInput = ({
  placeholder,
  onSubmit,
  className
} : LocationInputProps) => {
  const [value, setValue] = useState("");

  return (
      <div className={`input__container ${className}`}>
        <input
          onChange={(e) => setValue(e.target.value) }
          value={value}
          onKeyPress={(e) => (e.key === "Enter" && value !== "") && onSubmit(value) }
          type="search"
          id="locationInput"
          required
        />
        <label htmlFor="locationInput" className="input__label">{placeholder}</label>
      </div>
  );
}

export default LocationInput;
