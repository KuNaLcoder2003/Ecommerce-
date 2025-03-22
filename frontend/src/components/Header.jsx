import React, { useState } from 'react'
import { ShoppingCart, Menu } from 'lucide-react';

const Header = () => {


  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Collections",
      link: "#"
    },
    {
      labe: "Products",
      link: "#"
    },
    {
      labe: "About",
      link: "#"
    },
    {
      labe: "Contact",
      link: "#"
    }
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <Menu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <p href={"/"} className="text-4xl font-mono">
              logo
            </p>
          </section>
          {navlinks.map((d, i) => (
            <p
              key={i}
              className="hidden lg:block text-gray-400 hover:text-black cursor-pointer"
              href={d.link}
            >
              {d.labe}
            </p>
          ))}
        </div>

        {/* sidebar mobile menu */}
        {/* fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all */}
        {/* isSideMenuOpen && "translate-x-0" */}
        <div
          className={`z-20 fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ${isSideMenuOpen && "translate-x-0"}`}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <Menu
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <p key={i} className="font-bold" href={d.link}>
                {d.labe}
              </p>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-8">
          {/* cart icon */}
          <ShoppingCart className="text-3xl" />
          <img
            width={40}
            height={40}
            className="h-8 w-8 rounded-full "
            src="https://i.pravatar.cc/150?img=52"
            alt="avatar-img"
          />
          {/* avtar img */}

          <button className='border border-stone-500 py-[5px] px-[10px] rounded-md text-lg hover:bg-red-400 hover:border-white hover:text-white text-center font-bold'>Logout</button>
        </section>
      </nav>
      <hr className=" " />
    </main>
  );
}

export default Header
