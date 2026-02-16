import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 w-full py-6 mt-16">
      <div className="px-6 flex items-center space-x-6">
        
        {/* Facebook */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white cursor-pointer">
          <a href="#"><FaFacebookF /></a>
        </div>

        {/* Instagram */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white cursor-pointer">
          <FaInstagram />
        </div>

        {/* X */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer">
          <FaXTwitter />
        </div>

      </div>
    </footer>
  );
}