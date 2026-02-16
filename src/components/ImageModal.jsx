import { useState } from "react";
import DonateModal from "./DonateModal";

export default function ImageModal({ image, close }) {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
          
          {/* Left Image */}
          <div className="md:w-1/2">
            <img src={image.src} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="p-6 md:w-1/2">
            <p className="text-gray-700 mb-6">
              {image.description}
            </p>

            <button
              onClick={() => setShowDonate(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Donate
            </button>

            <button
              onClick={close}
              className="block mt-4 text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {showDonate && <DonateModal close={() => setShowDonate(false)} />}
    </>
  );
}