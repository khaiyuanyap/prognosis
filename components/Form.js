export function Input({ placeholder, onChange, type, step, onInput, min, pattern }) {
    return (
        <input required pattern={pattern} min={min} onInput={onInput} step={step} type={type? type : null} onChange={onChange} placeholder={placeholder} className="px-4 h-10 border-gray-200 border-2 invalid:border-red-500  rounded-md w-full flex items-center" />
    )
}

// Radio with number selection pass through props
export function Radio({ label, value, section, min }) {
    return (
        <div className="flex items-center">
            <input type="radio" min={min} name={section} value={value} />
            <label className="">{label}</label>
        </div>
    )
}


