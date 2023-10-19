'use client'

import { useRouter } from "next/navigation";

export default function ForgetPassword() {

    const router = useRouter()

    const handleClickBtnForgotPassword = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        router.push("/forget-password/verify-code")
    }

    return (
        <div className="container mx-auto bg-white lg:w-1/2 md:w-96 border-solid border-2 border-gray-200 rounded-lg mt-2 shadow-black">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Forgot your password
                    </h2>
                </div>

                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-0">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="italic block text-sm font-medium leading-6 text-gray-900">
                                We’ll send a verification code to this email or phone number if it matches an existing Unicorn account.
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={(e) => handleClickBtnForgotPassword(e)}
                            >
                                Reset password
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
