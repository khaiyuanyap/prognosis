export function Input({
  placeholder,
  onChange,
  type,
  step,
  onInput,
  min,
  pattern
}) {
  return (
    <input
      required
      pattern={pattern}
      min={min}
      onInput={onInput}
      step={step}
      type={type ? type : null}
      onChange={onChange}
      placeholder={placeholder}
      className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4 invalid:border-red-500"
    />
  )
}
