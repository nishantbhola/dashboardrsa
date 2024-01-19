export default function Sidebar() {
    return (
      <div className="h-screen bg-[#798991] rounded-xl">
        <p className='text-8xl text-center pt-5 text-white'>RAS</p>
        <div className='text-center mt-8 text-xl gap-5'>
          <ul className='gap-8 cursor-pointer'>
            <li className='py-3 text-white'>Dashboard</li>
            <li className='py-3 text-white'>Accounting</li>
            <li className='py-3 pr-4 text-white'>Purchase</li>
            <li className='py-3 pr-11 text-white'>Sales</li>
            <li className='py-3 pr-8 text-white'>Setting</li>
          </ul>
        </div>
      </div>
    );
  }
  