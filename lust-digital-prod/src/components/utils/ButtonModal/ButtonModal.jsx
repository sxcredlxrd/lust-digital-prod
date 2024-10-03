
const ButtonModal = ({children, className}) => {

    function handleClick() {
        alert('ы')
    }

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
};

export default ButtonModal;