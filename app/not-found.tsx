import Link from "next/link";
import Footer from "./components/footer/footer";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen text-center text-white">
        <div className="flex flex-col items-center justify-center flex-1">
          <h1>Oops!</h1>
          <p>We can't find the page you were looking for.</p>
          <p>
            You can go back to <Link href="/">main page</Link>
          </p>
          <p>Error code:</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
