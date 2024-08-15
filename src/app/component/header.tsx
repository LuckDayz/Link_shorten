import LoginAccount from "../component/login"
import SignUpAccount from "../component/signup"

export default function Header() {
  return (
    <header className="px-10 mx-10 bg-slate-600 rounded-2xl">
      <div className="flex justify-between items-center py-4">
        <nav>
          <ul className="flex gap-3 font-bold cursor-pointer underline text-slate-200">
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </nav>
        <h3 className="text-2xl text-slate-200 font-bold italic underline">
        lInk shorten
        </h3>
        <div className="items-center flex gap-4">
        <LoginAccount/>
        <SignUpAccount />
        </div>
      </div>

      {/* hero section */}
    </header>
  );
}
