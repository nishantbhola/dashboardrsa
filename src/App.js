import './App.css';
import Search from './component/Search';
import Sidebar from './component/Sidebar';
import Userinfo from './component/UserInfo';

function App() {
  return (
   <div className='bg-[#DEDEDC] w-full flex p-5 gap-5'>
    <div className='w-1/5 h-screen'>
      <Sidebar/>
    </div>
    <div className=' w-4/5 w-full rounded-xl gap-5'>
      <div className='w-full bg-[#F3F4F6] flex p-3 rounded-xl justify-evenly'>
        <Search/>
        <Userinfo/>
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
