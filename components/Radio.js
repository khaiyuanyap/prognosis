import { RadioGroup } from '@headlessui/react'

export default function Radio({ value, onChange, label, name0, name1, name2, name3 }) {
    return (
        <RadioGroup value={value} onChange={onChange}>
            <RadioGroup.Label className="font-semibold">{label}</RadioGroup.Label>
            <RadioGroup.Option value="0">
                {({ checked }) => (

                    <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
                        {checked ?
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                            </svg>}
                        {name0}
                    </span>

                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="1">
                {({ checked }) => (

                    <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
                        {checked ?
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                            </svg>}
                        {name1}
                    </span>
                )}
            </RadioGroup.Option>
            {name2 ? <RadioGroup.Option value="2">
                {({ checked }) => (

                    <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
                        {checked ?
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                            </svg>}
                        {name2}
                    </span>
                )}
            </RadioGroup.Option> : null}
            {name3 ? <RadioGroup.Option value="3">
                {({ checked }) => (

                    <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
                        {checked ?
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                            </svg>}
                        {name3}
                    </span>
                )}
            </RadioGroup.Option> : null}


        </RadioGroup>
    )
}