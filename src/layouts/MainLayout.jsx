import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const pageName = location.pathname.split("/")[1]



  return (
    <>
   
      <main>
        <header className="absolute z-10 w-full">
          <nav
            aria-label="Global"
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <span className="-m-1.5 p-1.5">
                <img
                  alt="Logo"
                  src={`${process.env.PUBLIC_URL}/logo.png`} 
                  className="h-8 w-auto invert brightness-0"
                />
              </span>
            </div>
            {pageName !== "" &&   <div className="animate-slide-in hidden lg:flex lg:flex-1 lg:justify-end">
              <span className="relative inline-flex">
                <button
                  onClick={() => navigate(-1)}
                  className="rounded-md bg-blue-800 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm "
                >
                  Try Again!
                  <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </button>
              </span>
            </div> }
          
          </nav>
        </header>
        <Outlet />
      </main>
    </>
  );
}
