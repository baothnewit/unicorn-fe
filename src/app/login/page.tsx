'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Login() {

    const [hidePassword, setToggleShowHidePassword] = useState(true)

    return (
        <div className="container mx-auto bg-white lg:w-1/3 md:w-96 border-solid border-2 border-gray-200 rounded-lg mt-10 shadow-black">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <div className='relative'>
                                    <input
                                        id="password"
                                        name="password"
                                        type={hidePassword ? "password" : "text"}
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <span className='absolute top-1.5 right-1.5' onClick={() => setToggleShowHidePassword(!hidePassword)}>
                                        {hidePassword ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label>
                                <input type="checkbox" className="accent-indigo-600" /> Remember me
                            </label>
                            <div className="text-sm">
                                <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up now
                        </Link>
                    </p>
                    <div className="my-5 text-center text-sm text-gray-500 flex items-center">
                        <p className="flex-1 h-px bg-gray-500"></p>
                        <p className="mx-4 text-lg">Or continue with</p>
                        <p className="flex-1 h-px bg-gray-500"></p>
                    </div>
                    <div className='flex gap-3'>
                        <Link href="#" className='flex items-center bg-blue-500 w-full justify-center text-white rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256" className='w-8 h-8 pr-2'>
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M50.0625,10.4375c-1.84766,0.82031 -3.82812,1.37109 -5.91016,1.62109c2.125,-1.27344 3.75781,-3.28906 4.52344,-5.6875c-1.98437,1.17578 -4.19141,2.03125 -6.53125,2.49219c-1.875,-2 -4.54687,-3.24609 -7.50391,-3.24609c-5.67969,0 -10.28516,4.60156 -10.28516,10.28125c0,0.80469 0.09375,1.58984 0.26953,2.34375c-8.54687,-0.42969 -16.12109,-4.52344 -21.19531,-10.74609c-0.88672,1.52344 -1.39062,3.28906 -1.39062,5.17187c0,3.56641 1.8125,6.71484 4.57422,8.5625c-1.6875,-0.05469 -3.27344,-0.51953 -4.66016,-1.28906c0,0.04297 0,0.08594 0,0.12891c0,4.98438 3.54688,9.13672 8.24609,10.08594c-0.85937,0.23438 -1.76953,0.35938 -2.70703,0.35938c-0.66406,0 -1.30859,-0.0625 -1.9375,-0.1875c1.3125,4.08203 5.10938,7.0625 9.60547,7.14453c-3.51562,2.75781 -7.94922,4.39844 -12.76953,4.39844c-0.83203,0 -1.64844,-0.04687 -2.44922,-0.14453c4.54687,2.92188 9.95312,4.62109 15.76172,4.62109c18.91406,0 29.25781,-15.66797 29.25781,-29.25391c0,-0.44531 -0.01172,-0.89453 -0.02734,-1.33203c2.00781,-1.44922 3.75,-3.26172 5.12891,-5.32422z"></path>
                                    </g>
                                </g>
                            </svg>
                            <span>Twitter</span>
                        </Link>
                        <Link href="#" className='flex items-center bg-indigo-600 bg-clip-content w-full justify-center text-white rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className='w-8 h-8 pr-2'>
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M30.14063,2c-3.27025,0 -6.09523,0.99694 -8.07812,2.9668c-1.9829,1.96986 -3.0625,4.85703 -3.0625,8.40039v4.63281h-6c-0.55226,0.00006 -0.99994,0.44774 -1,1v8c0.00006,0.55226 0.44774,0.99994 1,1h6v19c0.00006,0.55226 0.44774,0.99994 1,1h8c0.55226,-0.00006 0.99994,-0.44774 1,-1v-19h7c0.50395,-0.00003 0.92915,-0.37501 0.99219,-0.875l1,-8c0.03584,-0.28475 -0.05237,-0.57117 -0.24221,-0.78642c-0.18983,-0.21524 -0.46299,-0.33856 -0.74998,-0.33858h-8v-4c0,-1.11667 0.88333,-2 2,-2h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-7.6543c-0.00063,-0.50124 -0.37221,-0.9246 -0.86914,-0.99023c-0.88367,-0.11725 -4.07368,-0.35547 -6.99023,-0.35547zM30.14063,4c2.43785,0 4.79448,0.19505 5.85938,0.29492v5.70508h-5c-2.19733,0 -4,1.80267 -4,4v5c0.00006,0.55226 0.44774,0.99994 1,1h7.86719l-0.75,6h-7.11719c-0.55226,0.00006 -0.99994,0.44774 -1,1v19h-6v-19c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1h-6v-6h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.63281c0,-3.14464 0.9203,-5.44028 2.47266,-6.98242c1.55235,-1.54214 3.79722,-2.38477 6.66797,-2.38477z"></path>
                                    </g>
                                </g>
                            </svg>
                            <span>Facebook</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
