
import './App.css';
import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
return (
  <div className='w-full h-full flex flex-col '>
      <h1 className='bg-white w-11/12 ml-[60px] rounded-sm text-center text-xl tracking-wide font-semibold mt-5 py-1'>RANDOM  GIFs</h1>
      <div className = "flex flex-col w-full items-center mt-4">
        <Random/>
        <Tag/>


      </div>
  </div>
    
  );

};