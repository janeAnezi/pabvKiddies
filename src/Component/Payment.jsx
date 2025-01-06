import { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showAccountDetails, setShowAccountDetails] = useState(false);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (paymentMethod === 'card') {
      console.log('Processing card payment...');
    } else if (paymentMethod === 'bank') {
      console.log('Processing bank transfer...');
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-md mx-auto py-20 px-6">
        <h2 className="text-center text-2xl text-orange-500 font-bold">MAKE PAYMENT</h2>
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
          {paymentMethod === 'card' && (
            <div className="mt-6 border p-4 rounded">
              <h3 className="text-lg font-semibold">Card Payment</h3>
              <div className="mt-4">
                <label className="block text-gray-600">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full border px-4 py-2 rounded mt-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-600">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border px-4 py-2 rounded mt-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-600">CVV</label>
                <input
                  type="password"
                  placeholder="123"
                  className="w-full border px-4 py-2 rounded mt-2"
                />
              </div>
            </div>
          )}

          {paymentMethod === 'bank' && (
            <div className="mt-6 border p-4 rounded">
              <h3 className="text-lg font-semibold">Bank Transfer</h3>
              <div className="mt-4">
                <button
                  onClick={() => setShowAccountDetails((prev) => !prev)}
                  className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-700"
                >
                  {showAccountDetails ? 'Hide Account Details' : 'View Account Details'}
                </button>
                {showAccountDetails && (
                  <div className="mt-4">
                    <p className="text-gray-800">Bank Name: Polaris Bank</p>
                    <p className="text-gray-800">Account Number: 1234567890</p>
                    <p className="text-gray-800">Account Name: PABVkiddies</p>
                  </div>
                )}
              </div>
            </div>
          )}
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
