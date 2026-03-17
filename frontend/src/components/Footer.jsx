export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/80 backdrop-blur-md py-12 border-t border-slate-800/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 inline-block">KC</span>
          <p className="text-slate-500 text-sm font-light">
            &copy; {currentYear} Kotapati Chandeep. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
