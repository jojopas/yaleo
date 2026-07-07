import { useEffect } from "react";
import { Link } from "wouter";

export default function Giveaway() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
            Yaleo
          </Link>
          <Link href="/" className="text-sm text-foreground/60 hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main — split layout on desktop, stacked on mobile */}
      <main className="flex-1 flex flex-col lg:flex-row">

        {/* LEFT — Video panel */}
        <div className="lg:w-1/2 bg-black flex items-center justify-center relative overflow-hidden min-h-[50vh] lg:min-h-0 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
          <img
            src="/beach-bundle-giveaway.jpg"
            alt="Beach Bundle Giveaway"
            className="h-full w-full object-cover lg:object-contain"
          />
          {/* subtle gradient to blend with form side on desktop */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-background/60 pointer-events-none" />
        </div>

        {/* RIGHT — Form panel */}
        <div className="lg:w-1/2 flex items-center justify-center py-16 px-6 lg:px-12">
          <div className="w-full max-w-md">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>🎸</span> Limited Time Giveaway
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Win a <span className="text-primary">Beach Bundle!</span>
            </h1>
            <p className="text-foreground/60 mb-2 leading-relaxed">
              Sign up for a chance to win. A winner will be chosen on{" "}
              <strong className="text-foreground">July 9th at The Acorn Center in Littleton</strong> and announced at the show and via email with a full show wrap-up.
            </p>

            <div className="border-t border-primary/10 my-6" />

            {/* Form */}
            <form
              className="js-cm-form space-y-5"
              id="subForm"
              action="https://www.createsend.com/t/subscribeerror?description="
              method="post"
              data-id="A61C50BEC994754B1D79C5819EC1255C5DD5FEB7AD375B611DA140B50F301C2139D0B1A574F6293D9773047D29BBFC2CC3FD5720F6F1CFDEEB17A955BDC8AF39"
            >
              <div>
                <label htmlFor="fieldName" className="block text-sm font-medium text-foreground/60 mb-1.5">
                  Name
                </label>
                <input
                  id="fieldName"
                  name="cm-name"
                  type="text"
                  maxLength={200}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-foreground/30 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="fieldEmail" className="block text-sm font-medium text-foreground/60 mb-1.5">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="fieldEmail"
                  name="cm-tihrtuy-tihrtuy"
                  type="email"
                  autoComplete="email"
                  maxLength={200}
                  placeholder="Your email"
                  required
                  className="js-cm-email-input qa-input-email w-full px-4 py-3 rounded-lg bg-card border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-foreground/30 transition-colors"
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  id="cm-privacy-consent"
                  name="cm-privacy-consent"
                  type="checkbox"
                  required
                  aria-required="true"
                  className="qa-checkbox-cm-privacy-consent mt-0.5 h-4 w-4 accent-primary flex-shrink-0 cursor-pointer"
                />
                <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true" />
                <label htmlFor="cm-privacy-consent" className="text-sm text-foreground/50 cursor-pointer leading-snug">
                  I agree to receive emails from Yaleo <span className="text-primary">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="js-cm-submit-button w-full py-3.5 px-6 rounded-lg bg-primary text-black font-bold uppercase tracking-widest text-sm hover:bg-primary/90 active:scale-[0.98] transition-all mt-2"
              >
                Enter Giveaway & Subscribe →
              </button>
            </form>

            <p className="text-xs text-foreground/30 mt-4 text-center">
              No spam. Just the winner announcement and show recap.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-5 bg-background border-t border-primary/10 text-center">
        <p className="text-foreground/30 text-xs">
          © {new Date().getFullYear()} Yaleo - The Ultimate Santana Experience
        </p>
      </footer>
    </div>
  );
}
