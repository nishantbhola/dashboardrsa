import './App.css';

function App() {
  return (
   <div className='bg-[#DEDEDC] w-full flex p-3 gap-5'>

    <div className="w-1/5 h-[96vh] bg-[#798991] rounded-xl ">
        <p className='text-8xl text-center mt-5 text-white'>RAS</p>
        <div className='text-center mt-[40px] text-xl gap-5'>
          <ul className=' gap-8 cursor-pointer	'>
            <li className='py-3 text-white'>Dashboard</li>
            <li className='py-3 text-white'>Accounting</li>
            <li className='py-3 pr-4 text-white'>Purchase</li>
            <li className='py-3 pr-11 text-white'>Sales</li>
            <li className='py-3 pr-8 text-white'>Setting</li>
            </ul>
         </div>
    </div>
   
    <div className=' w-4/5 w-full rounded-xl gap-5'>
      <div className='w-full bg-[#F3F4F6] h-[10%] rounded-xl p-3 flex'>


        <form className='w-1/3'>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative ">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-white dark:text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm rounded-lg bg-[#A3B3BB] text-white placeholder-white" placeholder="Search..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

        <div className='w-2/3 justify-end items-center flex gap-2 text-xl cursor-pointer font-semibold'> User
          
            <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover cursor-pointer	" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Bordered avatar" />
            
          </div>



      </div>
      <div className=' w-full h-[10%] flex items-center'>
          <h2 className='text-2xl ml-3 cursor-pointer'>Dashboard / Stocks / Runner Bolt</h2>
      </div>
      <div className='w-full bg-[#F3F4F6] h-[80%]  rounded-xl p-3'>
        <div>
          <p className='text-6xl m-5'> Runner Bolt</p>
        </div>
        <div className=' flex gap-5'>

            <img className='w-1/3 rounded-xl mt-9 ml-6 ' src='https://assets.adidas.com/images/w_600,f_auto,q_auto/bce4c93377ad4aea9fa3b30f822bf235_9366/Ultrabounce_Shoes_Blue_ID2247_01_standard.jpg' alt='' />
            <div className="w-full">
              <p className="text-6xl mt-10">540 pieces</p>
              <div className='flex justify-between mt-5'>

                <div className=''>
                  <div className='text-4xl border-b-2 border-gray-400'>Size</div>
                  <div className='text-2xl mt-3 text-center'>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                  </div>
                </div>
                <div className=''>
                  <div className='text-4xl border-b-2 border-gray-400'>Availibility</div>
                  <div className='text-2xl mt-3 text-center'>
                    <p>75</p>
                    <p>106</p>
                    <p>167</p>
                    <p>18</p>
                    <p>19</p>
                    <p>40</p>
                    <p>681</p>
                  </div>
                </div>
                <div className=''>
                  <div className='text-4xl border-b-2 border-gray-400'>Color</div>
                  <div className='text-2xl mt-3 text-center '>
                    <p>Black</p>
                    <p>Varsity Red</p>
                    <p>white</p>
                    <p>Ice Blue</p>
                    <p>Light Steel Grey</p>
                    <p>Treeline</p>
                    <p>Canteen</p>
                  </div>
                </div>
                <div className='text-3xl border-b-2 '></div>
                <div className='text-3xl border-b-2 '></div>

              </div>

            </div>
          
        </div>

      </div>

    </div>
    
   </div>
  );
}

export default App;
