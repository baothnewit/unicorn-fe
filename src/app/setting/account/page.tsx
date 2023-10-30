export default function Account() {
    return (
        <div className="w-1/2 mx-auto my-8 bg-white border rounded-md   ">
            <div className="text-lg font-bold py-2 px-5">Setting Account</div>
            <ul className="divide-y">
                <li className="py-2 px-5 flex">
                    <p className="flex-1">Email</p>
                    <div className="text-right cursor-pointer">trinhhoaibao@gmail.com</div>
                </li>
                <li className="py-2 px-5 flex">
                    <p className="flex-1">Password</p>
                    <div className="text-right cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </li>
                <li className="py-2 px-5 flex">
                    <p className="flex-1">Phone Number</p>
                    <div className="text-right cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </li>
                <li className="py-2 px-5 flex">
                    <p className="flex-1">Devices that remember your password</p>
                    <div className="text-right cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </li>
                <li className="py-2 px-5 flex">
                    <p className="flex-1">Two-step verification</p>
                    <div className="text-right cursor-pointer flex ">
                        Off <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </li>
            </ul>
        </div>
    )
}