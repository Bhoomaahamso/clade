import Image from "next/image";

function Navbar() {
  return (
    <div className="flex justify-between p-6 pl-10 h-28 shadow-[0px_4px_4px_0px_#D9D9D91A]">
      <div>
        <button className="text-[#DC4A2D] bg-[#E7E7E7] py-4 px-7 text-xl font-bold">
          Logo
        </button>
      </div>
      <div className="flex space-x-16 p-2 rounded-full border-[0.5px] border-[#D1D1D1]">
        <button className="flex items-center text-white text-xl font-medium p-4 bg-[#DC4A2D] border-2 border-[#FCB4A5] rounded-full">
          <span className="mr-2">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 19.5V5.5C7 4.57003 7 4.10504 7.10222 3.72354C7.37962 2.68827 8.18827 1.87962 9.22354 1.60222C9.60504 1.5 10.07 1.5 11 1.5C11.93 1.5 12.395 1.5 12.7765 1.60222C13.8117 1.87962 14.6204 2.68827 14.8978 3.72354C15 4.10504 15 4.57003 15 5.5V19.5M4.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V8.7C21 7.57989 21 7.01984 20.782 6.59202C20.5903 6.21569 20.2843 5.90973 19.908 5.71799C19.4802 5.5 18.9201 5.5 17.8 5.5H4.2C3.07989 5.5 2.51984 5.5 2.09202 5.71799C1.71569 5.90973 1.40973 6.21569 1.21799 6.59202C1 7.01984 1 7.57989 1 8.7V16.3C1 17.4201 1 17.9802 1.21799 18.408C1.40973 18.7843 1.71569 19.0903 2.09202 19.282C2.51984 19.5 3.0799 19.5 4.2 19.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Jobs
        </button>
        <div className="flex items-center">
          <span className='relative after:bg-[#DC4A2D] after:top-0 after:right-0 after:h-[6px] after:w-[6px] after:rounded-full after:block after:absolute' >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z"
                stroke="#B0B0B0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <p className="text-xl ml-3 font-medium text-[#B0B0B0]">Messages</p>
        </div>
        <div className="flex items-center !mr-5">
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5295 7.85186C11.9571 8.25995 11.2566 8.5 10.5 8.5C8.567 8.5 7 6.933 7 5C7 3.067 8.567 1.5 10.5 1.5C11.753 1.5 12.8522 2.15842 13.4705 3.14814M5 19.5872H7.61029C7.95063 19.5872 8.28888 19.6277 8.61881 19.7086L11.3769 20.3789C11.9753 20.5247 12.5988 20.5388 13.2035 20.4214L16.253 19.8281C17.0585 19.6712 17.7996 19.2854 18.3803 18.7205L20.5379 16.6217C21.154 16.0234 21.154 15.0524 20.5379 14.4531C19.9832 13.9134 19.1047 13.8527 18.4771 14.3103L15.9626 16.1449C15.6025 16.4081 15.1643 16.5498 14.7137 16.5498H12.2855L13.8311 16.5498C14.7022 16.5498 15.4079 15.8633 15.4079 15.0159V14.7091C15.4079 14.0055 14.9156 13.392 14.2141 13.2219L11.8286 12.6417C11.4404 12.5476 11.0428 12.5 10.6431 12.5C9.67833 12.5 7.93189 13.2988 7.93189 13.2988L5 14.5249M19 6C19 7.933 17.433 9.5 15.5 9.5C13.567 9.5 12 7.933 12 6C12 4.067 13.567 2.5 15.5 2.5C17.433 2.5 19 4.067 19 6ZM1 14.1L1 19.9C1 20.4601 1 20.7401 1.10899 20.954C1.20487 21.1422 1.35785 21.2951 1.54601 21.391C1.75992 21.5 2.03995 21.5 2.6 21.5H3.4C3.96005 21.5 4.24008 21.5 4.45399 21.391C4.64215 21.2951 4.79513 21.1422 4.89101 20.954C5 20.7401 5 20.4601 5 19.9V14.1C5 13.5399 5 13.2599 4.89101 13.046C4.79513 12.8578 4.64215 12.7049 4.45399 12.609C4.24008 12.5 3.96005 12.5 3.4 12.5L2.6 12.5C2.03995 12.5 1.75992 12.5 1.54601 12.609C1.35785 12.7049 1.20487 12.8578 1.10899 13.046C1 13.2599 1 13.5399 1 14.1Z"
              stroke="#B0B0B0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-xl font-medium text-[#B0B0B0] ml-2">Payments</p>
        </div>
      </div>
      <div className="flex items-center">
      <span className='relative after:bg-[#DC4A2D] after:top-0 after:right-1 after:h-[6px] after:w-[6px] after:rounded-full after:block after:absolute' >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6666 28H13.3333M23.9999 10.6667C23.9999 8.54496 23.1571 6.51012 21.6568 5.00983C20.1565 3.50954 18.1217 2.66669 15.9999 2.66669C13.8782 2.66669 11.8434 3.50954 10.3431 5.00983C8.8428 6.51012 7.99994 8.54496 7.99994 10.6667C7.99994 14.7869 6.96057 17.608 5.7995 19.4739C4.82011 21.0479 4.33042 21.8348 4.34838 22.0544C4.36826 22.2975 4.41976 22.3902 4.61564 22.5355C4.79256 22.6667 5.59006 22.6667 7.18508 22.6667H24.8148C26.4098 22.6667 27.2073 22.6667 27.3842 22.5355C27.5801 22.3902 27.6316 22.2975 27.6515 22.0544C27.6695 21.8348 27.1798 21.0479 26.2004 19.4739C25.0393 17.608 23.9999 14.7869 23.9999 10.6667Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        </span>
        <div className="flex items-center gap-x-2 ml-5">
          <Image src="/Atlasian.svg" width="40" height="40" alt="Atlasian" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="black"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
