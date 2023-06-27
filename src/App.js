import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, ContactUs, Shipping_fulfillment, Trade_finance, Login, Terms, Privacy } from "./Pages";
import { Navbar, Footer, Admin, } from "./Components";
import styles from "./style";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};


const App = () => {
  const scrollDirection = useScrollDirection()

  return (
    <>

      <div className="">

        <div>
          <div className={`${scrollDirection === 'down' ? '-translate-y-full' : 'top-0'} sticky top-0 z-10 transition-all duration-500`}>
            <div className={` bg-primary w-full overflow-hidden `}>
              <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
            </div>
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shipping-fulfillment' element={<Shipping_fulfillment />} />
            <Route path='/trade-finance' element={<Trade_finance />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/terms-of-services' element={<Terms />} />
            <Route path='/privacy-policy' element={<Privacy />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/login' element={<Login />} />

          </Routes>
          <div className={`${styles.paddingX} ${styles.paddingY} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>

        </div>


      </div>


    </>
  )
}

export default App