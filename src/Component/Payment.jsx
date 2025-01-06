import { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(''); 

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    console.log(`Payment method selected: ${paymentMethod}`);
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-md mx-auto py-20 px-6">
        <h2 className="text-center text-2xl font-semibold">Payment Page</h2>
        <p className="text-center text-gray-600 mt-4">Choose a payment method to proceed.</p>

        <div className="mt-8">
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="w-4 h-4"
              />
              <span className="text-gray-800">Pay with Card</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
                className="w-4 h-4"
              />
              <span className="text-gray-800">Bank Transfer</span>
            </label>
          </div>
          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Proceed to Pay
          </button>
          <p className="mt-4 text-gray-600 text-sm text-center">
            Please ensure your payment details are correct before proceeding.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Payment;
