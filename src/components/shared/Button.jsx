export default function Button({ children, type, isDisabled }) {
  return (
    <button
      className={`inp form-${isDisabled ? "disable" : "submit"}`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
