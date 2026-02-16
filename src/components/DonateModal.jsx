import { useState } from "react";
import CryptoModal from "./CryptoModal";

export default function DonateModal({ close }) {
  const [showCrypto, setShowCrypto] = useState(false);
  const [regionModal, setRegionModal] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-40">
        <div className="bg-white p-6 rounded-xl w-80">
          <h2 className="text-lg font-bold mb-4">
            Choose Payment Option
          </h2>

          <button
            onClick={() => setRegionModal(true)}
            className="w-full bg-gray-800 text-white p-2 rounded mb-3"
          >
            Paystack
          </button>

          <button
            onClick={() => setShowCrypto(true)}
            className="w-full bg-green-600 text-white p-2 rounded"
          >
            Cryptocurrency
          </button>

          <button
            onClick={close}
            className="block mt-4 text-gray-500 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>

      {showCrypto && <CryptoModal close={() => setShowCrypto(false)} />}

      {regionModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 text-center">
            <h3 className="font-semibold mb-3">
              Unavailable in Your Region
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Paystack donations are currently unavailable in your region.
              Please use cryptocurrency instead.
            </p>

            <button
              onClick={() => setRegionModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
}