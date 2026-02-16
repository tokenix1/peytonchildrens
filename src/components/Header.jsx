import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center p-4 shadow-md">
        <img src={logo} className="w-9 h-9 m-2 rounded-full" alt="" />
      {/* <div className="w-10 h-10 bg-green-600 rounded-full mr-3"></div> */}
      <h1 className="font-bold text-lg">
        Peyton Manning Children's Hospital
      </h1>
    </header>
  );
}