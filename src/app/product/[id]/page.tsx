import React from 'react';
import Image from "next/image";

export default function ProductDetails(){
    return (
        <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <div
                    className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-3 lg:row-end-1">
                        <div className="lg:flex lg:items-start">
                            <div className="lg:order-2 lg:ml-5">
                                <div className="max-w-xl overflow-hidden rounded-lg bg-slate-100">
                                    <Image
                                        src="https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/6b4cf068-0be3-4b9e-b741-525d46eec004.png"
                                        alt="Afro-Brazillian Coffee Image"
                                        layout="fixed"
                                        className="rounded-lg"
                                        width={576}
                                        height={576}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Afro-Brazillian Coffee</h1>

                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        <div
                            className="mt-10 flex flex-col items-center  justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                            <div className="flex items-end">
                                <h1 className="text-3xl font-bold">$60.50</h1>
                            </div>

                            <div className="flex gap-4 sm:gap-2">
                                <button type="button"
                                        className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-sky-500 bg-none px-8 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-sky-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                    </svg>
                                    Add to cart
                                </button>

                                <button type="button"
                                        className="inline-flex items-center justify-center rounded-md bg-emerald-500 py-3 px-8 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                    </svg>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}