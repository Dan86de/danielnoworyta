import { geomanistMedium } from "../../pages/fonts/fontUtils";

export const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className={`mt-1 text-4xl tracking-tight text-textprimary sm:text-5xl lg:text-6xl ${geomanistMedium.variable} font-sans`}
        >
          There is some heading text about this page.
        </h1>
        <p
          className={`mx-auto mt-5 max-w-xl text-xl text-textprimary/70  ${geomanistMedium.variable} font-sans`}
        >
          There is some additional information about this site. Try to figure
          something later on this one.
        </p>
      </div>
    </div>
  );
};
