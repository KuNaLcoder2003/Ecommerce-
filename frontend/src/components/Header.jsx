import React, { useEffect, useState } from 'react'
import { ShoppingCart, Menu, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {

  const [url, setUrl] = useState('')
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      fetch('https://ksecombe.onrender.com/api/v1/user/details', {
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('token'),
          'Content-type': 'application/json'
        }
      }).then(async (res) => {
        const data = await res.json();
        if (data.user) {
          setUrl(data.user.avatar)
        }
      })
    }
  }, [])

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

        <div className='flex w-full max-w-sm'>
          <input className='flex-[2] p-3 rounded-l-md border border-gray-300 w-[70%]' placeholder='search products...' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
          <button className='px-4 py-3 bg-black text-white rounded-r-md'>Search</button>
        </div>

        {/* last section */}
        <section className="flex items-center gap-8">
          {/* cart icon */}
          <ShoppingCart className="text-3xl cursor-pointer"  />
          {
            isLoggedIn ? <img
              width={40}
              height={40}
              className="h-8 w-8 rounded-full "
              src={url}
              alt="avatar-img" /> : <User size={20} />
          }

          {/* avtar img */}

          <button onClick={() => {
            localStorage.removeItem('token');
            setIsLoggedIn(false)
            navigate('/signin')

          }} className='border border-stone-500 py-[5px] px-[10px] rounded-md text-lg hover:bg-red-400 hover:border-white hover:text-white text-center font-bold'>Logout</button>
        </section>
      </nav>
      <hr className=" " />
    </main>
  );
}

export default Header
