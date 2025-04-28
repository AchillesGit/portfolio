import Image from "next/image";

export default function About() {
  return (
    <section className='text-white py-12 px-6'>
      <div className='max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center'>
        {/* <!-- Left: Avatar + Meta --> */}
        <div className='flex flex-col items-center space-y-4'>
          {/* <!-- Avatar --> */}
          <div className='rounded-full overflow-hidden border-4 border-gray-700'>
            <Image
              src='/Dennis-Sadiki.png'
              alt='Avatar'
              className='object-cover'
              width={200}
              height={200}
            />
            {/* <Image
              src='/dennis.jpg'
              alt='Avatar'
              className='object-cover'
              width={200}
              height={200}
            /> */}
          </div>
          {/* <!-- Timezone --> */}
          <div className='flex items-center text-gray-400 space-x-2'>
            {/* <!-- Icon: globe or clock --> */}
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg> */}
            <span>Berlin/Deutschland</span>
          </div>
          {/* <!-- Languages --> */}
          <div className='flex space-x-2'>
            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>
              Deutsch
            </span>
            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>
              Englisch
            </span>
          </div>
        </div>

        {/* <!-- Right: Header & Social (spans 2 cols on md+) --> */}
        <div className='md:col-span-2 flex flex-col space-y-6'>
          {/* <!-- Schedule-Button --> */}
          <div className='flex justify-end'>
            <button className='flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-sm'>
              {/* <!-- Kalender-Icon --> */}
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg> */}
              <span>Schedule a call</span>
            </button>
          </div>

          {/* <!-- Name & Role --> */}
          <div>
            <h1 className='text-4xl font-bold leading-tight'>Selene Yu</h1>
            <p className='text-xl text-gray-400 mt-1'>Design Engineer</p>
          </div>

          {/* <!-- Soziale Links --> */}
          <div className='flex space-x-4'>
            {/* <!-- GitHub --> */}
            <a
              href='#'
              className='flex items-center space-x-1 hover:text-gray-200'
            >
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.244-.018-2.254-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.49.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.655 1.653.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.432.372.816 1.103.816 2.222 0 1.606-.015 2.903-.015 3.298 0 .322.216.699.825.58C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z' />
              </svg> */}
              <span className='text-sm'>GitHub</span>
            </a>
            {/* <!-- LinkedIn --> */}
            <a
              href='#'
              className='flex items-center space-x-1 hover:text-gray-200'
            >
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M20.447 20.452H17.2v-5.569c0-1.328-.024-3.038-1.85-3.038-1.85 0-2.134 1.445-2.134 2.939v5.668h-3.248V9h3.121v1.561h.045c.435-.824 1.497-1.693 3.079-1.693 3.293 0 3.9 2.17 3.9 4.995v6.589zM5.337 7.433a1.88 1.88 0 110-3.76 1.88 1.88 0 010 3.76zM6.938 20.452H3.736V9h3.202v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
              </svg> */}
              <span className='text-sm'>LinkedIn</span>
            </a>
            {/* <!-- Email --> */}
            <a
              href='mailto:example@domain.com'
              className='flex items-center space-x-1 hover:text-gray-200'
            >
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 4v1a3 3 0 003 3h2a3 3 0 003-3v-1'
                />
              </svg> */}
              <span className='text-sm'>Email</span>
            </a>
          </div>

          {/* <!-- Bio --> */}
          <p className='text-gray-300 leading-relaxed'>
            Selene is a Jakarta-based design engineer with a passion for
            transforming complex challenges into simple, elegant design
            solutions. Her work spans digital interfaces, interactive
            experiences, and the convergence of design and technology.
          </p>
        </div>
      </div>
    </section>
  );
}
