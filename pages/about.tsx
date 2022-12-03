import { geomanistRegular } from "./fonts/fontUtils";

export default function About() {
  return (
    <div
      className={` ${geomanistRegular.variable} font-sans max-w-7xl mx-auto px-4 sm:px-6`}
    >
      <h1>About page</h1>
    </div>
  );
}
