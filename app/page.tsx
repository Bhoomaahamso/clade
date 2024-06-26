import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center space-x-[72px] pl-24 border border-[#E7E7E7]">
        <h4 className="relative text-xl font-semibold text-[#DC4A2D] p-5 after:bg-[#DC4A2D] after:left-[20%] after:-bottom-5 after:h-[2px] after:w-16 after:rounded-full after:block after:relative border-[#DC4A2D]">
          Job preview
        </h4>
        <h4 className="text-xl font-medium text-[#888888]">Applicants</h4>
        <h4 className="text-xl font-medium text-[#888888]">Match</h4>
        <h4 className="text-xl font-medium text-[#888888]">Messages</h4>
      </div>
      <div className="pt-9 pb-8 pl-24">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <h1 className="text-4xl/[48px] font-semibold text-[#3D3D3D]">
              Senior Product Designer
            </h1>
            <span className="bg-[#D1D1D1] w-1 h-1 rounded-full"></span>
            <p className="text-[#888888] text-sm font-medium">
              posted 2 days ago
            </p>
            <div className="flex items-center bg-[#ECFDF3] rounded-full border border-[#ABEFC6] w-fit px-2">
              <span className="bg-[#17B26A] mr-1 w-[6px] h-[6px] rounded-full block"></span>
              <p className="text-[#067647] text-xs/[18px] font-medium">Open</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.5C10.6569 12.5 12 11.1569 12 9.5C12 7.84315 10.6569 6.5 9 6.5C7.34315 6.5 6 7.84315 6 9.5C6 11.1569 7.34315 12.5 9 12.5Z"
                  stroke="#5D5D5D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 21.5C13 17.5 17 13.9183 17 9.5C17 5.08172 13.4183 1.5 9 1.5C4.58172 1.5 1 5.08172 1 9.5C1 13.9183 5 17.5 9 21.5Z"
                  stroke="#5D5D5D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-xl font-medium text-[#5D5D5D]">
                Delaware, USA
              </p>
            </div>
            <span className="bg-[#D1D1D1] w-1 h-1 rounded-full"></span>
            <div className="flex items-center space-x-3">
              <svg
                width="20"
                height="18"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3.5C12 4.60457 9.53757 5.5 6.5 5.5C3.46243 5.5 1 4.60457 1 3.5M12 3.5C12 2.39543 9.53757 1.5 6.5 1.5C3.46243 1.5 1 2.39543 1 3.5M12 3.5V5M1 3.5V15.5C1 16.6046 3.46243 17.5 6.5 17.5M6.5 9.5C6.33145 9.5 6.16468 9.49724 6 9.49185C3.19675 9.39999 1 8.54328 1 7.5M6.5 13.5C3.46243 13.5 1 12.6046 1 11.5M21 10C21 11.1046 18.5376 12 15.5 12C12.4624 12 10 11.1046 10 10M21 10C21 8.89543 18.5376 8 15.5 8C12.4624 8 10 8.89543 10 10M21 10V17.5C21 18.6046 18.5376 19.5 15.5 19.5C12.4624 19.5 10 18.6046 10 17.5V10M21 13.75C21 14.8546 18.5376 15.75 15.5 15.75C12.4624 15.75 10 14.8546 10 13.75"
                  stroke="#5D5D5D"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-xl font-medium text-[#5D5D5D]">$300k-$400k</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
        <div>
          <div>
            <p>Skills Required</p>
            <div className="">
              <div className="flex py-1 px-[6px] w-fit rounded-md border border-[#D0D5DD]">
                <Image src="/Figma.svg" width="16" height={16} alt="Figma" />
                <p className="ml-1">Figma</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-[#6E6D6D]">Preferred Language</p>
            <h1 className="text-base font-semibold text-[#3D3D3D]">English</h1>
          </div>
          <div>
            <p className="text-sm font-medium text-[#6E6D6D]">type</p>
            <h1 className="text-base font-semibold text-[#3D3D3D]">Full time</h1>
          </div>
          <div>
            <p className="text-sm font-medium text-[#6E6D6D]">Years of Experience</p>
            <h1 className="text-base font-semibold text-[#3D3D3D]">3+ Years of Experience</h1>
          </div>
        </div>
    </div>
  );
}
