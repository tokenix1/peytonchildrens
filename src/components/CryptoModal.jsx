import { useState } from "react";

import btcQR from "../assets/btc-qr.jpeg";
import usdtQR from "../assets/usdt-qr.jpeg";
import ltcQR from "../assets/ltc-qr.jpeg";

export default function CryptoModal({ close }) {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const wallets = [
    {
      name: "Bitcoin (BTC)",
      address: "bc1qnehznrcl9ryf97g4zwlezlcn9ny2zjne48zamy",
      qr: btcQR
    },
    {
      name: "USDT (ERC20)",
      address: "0x594B1751b1C2584d46ef48EA5300b011e1312d60",
      qr: usdtQR
    },
    {
      name: "Litecoin (LTC)",
      address: "ltc1qqaytrv3mgree7r40v72tcnvjc46ezeg6wqaxrn",
      qr: ltcQR 
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold text-center mb-8">
          Crypto Donation
        </h2>

        <div className="space-y-10">
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 flex flex-col items-center text-center shadow-sm"
            >
              <h3 className="font-semibold mb-4">
                {wallet.name}
              </h3>

              {/* ✅ QR Code From Assets */}
              <div className="w-40 h-40 mb-4">
                <img
                  src={wallet.qr}
                  alt={`${wallet.name} QR`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Wallet Address */}
              <p className="text-xs break-all text-gray-600 mb-3">
                {wallet.address}
              </p>

              {/* Copy Button */}
              <button
                onClick={() =>
                  copyToClipboard(wallet.address, wallet.name)
                }
                className="bg-blue-600 text-white text-xs px-4 py-2 rounded-lg"
              >
                {copied === wallet.name ? "Copied ✅" : "Copy Address"}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={close}
          className="mt-10 w-full bg-red-500 text-white py-2 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}