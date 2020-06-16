export const Input = ({ error, onChange, ...props }) => {
  const handleChange = React.useCallback(
    (ev) => onChange(props.name, ev.target.value),
    [props.name]
  )

  return (
    <div className="mb-3 md:mb-4">
      <input
        {...props}
        onChange={handleChange}
        className={`p-4 bg-gunmetal opacity-50 border-2 border-transparent rounded-md md:p-4 w-full ${
          error && 'shake border-red'
        }`}
      />
      {error && <div className="text-red text-sm p-1">{error}</div>}
    </div>
  )
}
