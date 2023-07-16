import React from 'react';
import StylingLogo from './StylingLogo';

const Dashboard = () => {
  return (
    <div>
      <div className="bg-slate-100">
        <StylingLogo />
        <div className=" flex items-center w-full h-screen justify-center drop-shadow-md ">
          <div className="bg-white gap-4 flex flex-col border justify-start rounded-3xl w-[508px] h-[415px] text-black px-[40px] py-[32px]">
            <div>
              <h1 className="font-bold text-[28px] py-4">Dashboard</h1>
            </div>

            <div>
              <p className="text-xs font-normal mb-6">Selamat Datang User </p>
              <form>
                <button type="submit" className="w-full bg-orange-500 text-base font-bold py-4 px-16 rounded-[100px] text-white">
                  Keluar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
