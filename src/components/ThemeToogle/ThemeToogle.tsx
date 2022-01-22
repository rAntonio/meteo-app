import './ThemeToogle.css';

export interface ThemeToogleProps {
  toogleAction : () => void;
  className?: string;
  label?: string;
};

const ThemeToogle = ({
  toogleAction,
  className,
  label = ''
} : ThemeToogleProps) => {
  return (
      <div className={`toogle__input__container ${className}`}>
        <input 
          type="checkbox" 
          name="switch" 
          id="switch"
          className='input__toogle'
          onClick={() => {
            toogleAction();
          }}
        />
        <label htmlFor="switch">{label}</label>
      </div>
  );
}

export default ThemeToogle;
