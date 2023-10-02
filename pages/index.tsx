import Product from './product';
import Footer from './footer';
import ListProduct from './ListProduct';
import NavbarNew from './navbar';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Mengimpor stylesheet AOS (opsional)
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import dynamic from 'next/dynamic'
import OpenLayersMap from './Maptest';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
export default function Home() {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);
  const CrispWithNoSSR = dynamic(
    () => import('./crisp')
  )
  return (
    <main className='bg-white'>
      <NavbarNew />
      <CrispWithNoSSR />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-40 xl:py-50" >
        <div className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
          <ParallaxProvider>
            <ParallaxBanner
              layers={[{ image: 'unsplash.jpg', speed: -30 }]}
              className="aspect-[2/1]"
            />
          </ParallaxProvider>

        </div>
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center" data-aos="fade-up"
          data-aos-duration="3000">
          <div className="mx-auto max-w-8xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <a href="https://twitter.com/intent/tweet?text=Tempat%20Jual%20Kaos%20murah!&url=khoer.vercel.app">
              <button className="inline-flex items-center h-10 px-5 mr-5  my-5  text-indigo-100 transition-colors duration-150 bg-twitter-blue rounded-lg focus:shadow-outline hover:bg-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span>Share</span>
              </button>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=khoer.vercel.app&quote=Tempat%20Jual%20Kaos%20murah">
              <button className="inline-flex items-center h-10 px-5 mr-5  text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg> <span>Share</span>
              </button>
            </a>
            <a href="https://t.me/share/url?url=Tempat%20Jual%20Kaos%20murah">
              <button className="inline-flex items-center h-10 px-5 mr-5  text-indigo-100 transition-colors duration-150 bg-telegram-blue rounded-lg focus:shadow-outline hover:bg-indigo-500">
                <svg
                  className="h-4 w-4 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 1.41421,
                  }}
                >
                  <path
                    id="telegram-1"
                    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                  />
                </svg>
                <span>Share</span>
              </button>
            </a>
          </div>
          <div className="mx-auto mt-10 max-w-10xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 text-center mx-auto text-white sm:grid-cols-2 md:flex lg:gap-x-10 text-center">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="mx-auto">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <ListProduct />
      <Product />
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl bg-white lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2  lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Alamat</h1>
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <OpenLayersMap />
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 text-gray-900 lg:pb-16 lg:pr-8 lg:pt-6">
          <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tempore ex doloremque ea quod ducimus eius cumque nesciunt impedit recusandae laboriosam veritatis, sint sequi illo.</p>
        </div>
      </div>
      <Footer />
    </main >
  )
}
