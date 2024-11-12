const Btn = ({ setValue, value }) => {
  function handleClick() {
    setValue(value + 1);
  }
  return (
    <button
      className="px-8 py-2 bg-purple-800 text-white rounded-md"
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default Btn;
