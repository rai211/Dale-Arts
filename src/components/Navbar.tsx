import Image from "next/image";
import search from '../assets/icons/search.svg'
import filter from '../assets/icons/filter.svg'

const Navbar = () => {
    return (
        <nav className="grid grid-cols-4 gap-8 w-full">
            <div className=" h-[80px] p-4 rounded-[10px] bg-[#fff] flex items-center">
                <h1 className="text-[32px] text-[#101010]">LOGO</h1>
            </div>
            <div className="col-span-2 h-[80px] p-4 rounded-[10px] bg-[#fff] flex items-center">
                <div className="flex gap-1 items-center w-full">
                    <Image
                        src={search}
                        width={24}
                        height={24}
                        alt="search"
                    />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="flex flex-1 border-none outline-none text-[12px] text-[#9A9A9E]"
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <Image
                        src={filter}
                        width={24}
                        height={24}
                        alt="search"
                    />
                    <p className="text-[14px] text-[#303030]">Filters</p>
                </div>
            </div>
            <div className=" h-[80px] p-4 rounded-[10px] bg-[#88C2BB] flex items-center justify-center cursor-pointer">
                <h1 className="text-[16px] text-[#FFFFFF]">Become a Seller</h1>
            </div>
        </nav>
    );
};

export default Navbar;
