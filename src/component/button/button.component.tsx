import "./button.component.styles.scss"

const BUTTON_TYPES_CLASS: any = {
    google : "google-sign-in",
    inverted: "inverted"
}

export const Button = ({children, buttonType, ...otherProps}: any) => {
    return (
        <button className={`button-container ${BUTTON_TYPES_CLASS[buttonType]}`}
        {...otherProps}
        >
            {children}
        </button>
    )
}