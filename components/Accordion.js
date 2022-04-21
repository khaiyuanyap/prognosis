import {Disclosure, Transition} from "@headlessui/react"

export default function Accordion({className, title, description}) {
	return (
		<Disclosure as="div" className={className}>
			{({open}) => (
				<>
					<Disclosure.Button className="flex w-full items-center justify-between rounded-lg border-2 bg-white px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
						<span>{title}</span>
						{open ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clipRule="evenodd"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					</Disclosure.Button>
					<Transition
						show={open}
						enter="transition duration-250 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-250 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0">
						<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
							{description}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	)
}
