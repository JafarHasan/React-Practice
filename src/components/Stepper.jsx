import { useState } from "react";

const Stepper = () => {
    const arr = ["Add contact details for further communications.", "Add shipping address for successful delivery.", "Complete Payment to complete the order.", "Ready to get delivered.", "Order Delivered successfully!🎉"]

    const [step, setStep] = useState(0)
    return (
        <>
            <nav className="w-full p-5 shadow flex items-center justify-center text-3xl">
                <h1>Stepper</h1>
            </nav>
            <div className="flex flex-col items-center gap-5">
                <div className="flex items-center justify-center my-5">

                    <div className="flex items-center">
                        <h1 className={`size-15  border rounded-full flex items-center justify-center`}>
                            1
                        </h1>
                        <p className={`w-25 h-1 bg-gray-400 `}></p>
                    </div>

                    <div className="flex items-center">
                        <h1 className={`size-15  border rounded-full flex items-center justify-center`}>2</h1>
                        <p className={`w-25 h-1 bg-gray-400 `}></p>
                    </div>


                    <div className="flex items-center">
                        <h1 className={`size-15  border rounded-full flex items-center justify-center`}>3</h1>
                        <p className={`w-25 h-1 bg-gray-400 `}></p>
                    </div>


                    <div className="flex items-center">
                        <h1 className={`size-15  border rounded-full flex items-center justify-center`}>4</h1>
                    </div>

                </div>
                <div>
                    <h1 className="text-xl font-bold">{arr[step]}</h1>
                </div>
                <div className="flex gap-5">
                    <button
                        onClick={() => setStep(step - 1)}
                        disabled={step === 0}
                        className={`bg-gray-500 p-3 rounded w-30 text-white ${step === 0 ? "opacity-40 cursor-not-allowed" : ""}`}>Prev</button>

                    <button
                        onClick={() => setStep(step + 1)}
                        disabled={step === arr.length - 1}
                        className={`bg-gray-500 p-3 rounded w-30 text-white ${step === arr.length - 1 ? "opacity-40 cursor-not-allowed" : ""}`}>Next</button>
                </div>
            </div>

        </>
    )
}
export default Stepper;