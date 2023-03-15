import styles from "./Button.module.css";

export interface IButton {
  icon: string;
  onClick: () => void;
  buttonText: string;
}

function Button(props: IButton) {
  return (
    <button
      className={styles.wrapper}
      onClick={props.onClick}
      data-testid="button"
    >
      {props.buttonText}
      <img src={props.icon} alt="button-icon" />
    </button>
  );
}

export default Button;
