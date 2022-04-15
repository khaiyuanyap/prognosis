export function Input({ placeholder }) {
    return (
        <input placeholder={placeholder} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
    )
}

// Radio with number selection pass through props
export function Radio({ label, value, section }) {
    return (
        <div className="flex items-center">
            <input type="radio" name={section} value={value}/>
            <label className="">{label}</label>
        </div>
    )
}


