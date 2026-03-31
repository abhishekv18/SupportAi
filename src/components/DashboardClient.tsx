'use client'
import axios from 'axios';
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from "lucide-react";
const DashboardClient = ({ ownerId }:{ ownerId?: string }) => {
      const navigate=useRouter();
      const [open, setOpen] = useState(false);
      const [businessName, setBusinessName] = useState("");
       const [businessEmail, setBusinessEmail] = useState("");
        const [knowledge,setKnowledge] = useState("");
        const[loading,setLoading]=useState(false);
        const [saved,setSaved]=useState(false);
        const handleSetting=async()=>{
          setLoading(true);
          try {
            console.log({ownerId,businessName,businessEmail,knowledge});
            const response=await axios.post("/api/seeting",{ownerId,businessName,businessEmail,knowledge});
             console.log(response.data);
             setLoading(false);
             setSaved(true);
             setTimeout(()=>setSaved(false),3000);
          } catch (error) {
            console.log(error);
              setLoading(false);
          }
        }
 const handleLogout = async() => {
    try {
      const response=await axios.get("/api/auth/logout");
       window.location.href = "/";
    } catch (error) {
      console
.log("Logout error:", error);
    }
  }
        useEffect(()=>{
              const handleGetSetting=async()=>{
          try {
            const result=await axios.post("/api/seeting/get",{ownerId});
            console.log(result.data);
            setBusinessName(result.data.businessName);
            setBusinessEmail(result.data.businessEmail);
            console.log(result.data.knowledge);
            setKnowledge(result.data.knowledge);
          } catch (error) {
            console.log(error);
              setLoading(false);
          }
        }
        handleGetSetting();
        },[ownerId]);

  return (
    <div className='min-h-screen bg-zinc-50 text-zinc-900'>
      {/* <motion.div className='fixed left-0 top-0 w-full z-50 bg-white/70 border-b backdrop-blur-xl border-zinc-200 ' initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
        <div className='flex justify-between items-center max-w-7xl mx-auto h-16 px-6'>
          <div className='text-xl font-semibold tracking-tight cursor-pointer' onClick={()=>navigate.push("/")}>
            Support<span className='text-zinc-400'>AI</span>
          </div>
         <div className='flex gap-2 justify-center items-center'>
           <button onClick={()=>navigate.push("/embed")} className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition cursor-pointer'>
            Embed Chatbot
          </button>
           <button onClick={()=>navigate.push("/")} className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition cursor-pointer'>
            Home
          </button>
          <button onClick={handleLogout} className='px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-300 text-sm transition cursor-pointer'>
            Logout
          </button>
         </div>
        


        </div>
      </motion.div> */}
<motion.div 
  className='fixed left-0 top-0 w-full z-50 bg-white/70 border-b backdrop-blur-xl border-zinc-200' 
  initial={{ y: -50 }} 
  animate={{ y: 0 }} 
  transition={{ duration: 0.7 }}
>
  <div className='flex justify-between items-center max-w-7xl mx-auto h-16 px-4 sm:px-6'>
    
    {/* Logo */}
    <div 
      className='text-lg sm:text-xl font-semibold tracking-tight cursor-pointer' 
      onClick={()=>navigate.push("/")}
    >
      Support<span className='text-zinc-400'>AI</span>
    </div>

    {/* Desktop Buttons */}
    <div className='hidden md:flex gap-2 items-center'>
      <button onClick={()=>navigate.push("/embed")} className='cursor-pointer px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition'>
        Embed Chatbot
      </button>

      <button onClick={()=>navigate.push("/")} className='cursor-pointer px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition'>
        Home
      </button>

      <button onClick={handleLogout} className='cursor-pointer px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm hover:bg-zinc-700 transition'>
        Logout
      </button>
    </div>

    {/* Mobile Toggle */}
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  </div>

  {/* Mobile Dropdown */}
  {open && (
    <div className="md:hidden px-4 pb-4">
      <div className="flex flex-col gap-2 bg-white rounded-xl shadow-lg p-3 border border-zinc-200">
        
        <button
          onClick={() => {
            navigate.push("/embed");
            setOpen(false);
          }}
          className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 text-sm"
        >
          Embed Chatbot
        </button>

        <button
          onClick={() => {
            navigate.push("/");
            setOpen(false);
          }}
          className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 text-sm"
        >
          Home
        </button>

        <button
          onClick={() => {
            handleLogout();
            setOpen(false);
          }}
          className="text-left px-4 py-2 rounded-lg bg-zinc-800 text-white text-sm hover:bg-zinc-700"
        >
          Logout
        </button>

      </div>
    </div>
  )}
</motion.div>
      <div className='px-4 py-14 flex justify-center mt-20'>
         <motion.div className='w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10'>
            <div className='mb-10'>
                <h1 className='text-2xl font-semibold'>ChatBot Settings</h1>
                <p className='text-zinc-500 mt-1'>Manage your chatbot configuration and preferences.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-lg font-medium mb-4'>Business Details</h1>
                <div className='space-y-4'>
                    <input type='text' placeholder='Business Name' className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' onChange={(e)=>setBusinessName(e.target.value)} value={businessName}/>
                    <input type='email' placeholder='Support Email' className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' onChange={(e)=>setBusinessEmail(e.target.value)} value={businessEmail}/>
                </div>
            </div>
             <div className='mb-10'>
                <h1 className='text-lg font-medium mb-4'>Knowledge Base</h1>
                <p className='text-sm text-zinc-500 mb-4'>Add FAQs, policies, and other information to help your chatbot provide accurate responses.</p>
                <div className='space-y-4'>
                    <textarea placeholder={`Example:
                      Refund Policy:7 days return policy for all products.
                      Delivery Time: Orders are processed within 24 hours and delivered within 3-5 business days.
                      Cash on Delivery: Available for orders under $100. Not available for international orders.
                      Contact Support: For any inquiries, please contact our support team.

                      `} onChange={(e)=>setKnowledge(e.target.value)} value={knowledge} className='w-full h-54 rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' />
                </div>
            </div>
            <div className='flex items-center gap-5'>
           <motion.button className='px-7 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition cursor-pointer disabled:opacity-60' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={loading} onClick={handleSetting}>
               {loading?"Saving...":"Save"}
           </motion.button>
           {
            saved && <motion.span
            initial={{opacity:0,y:6}}
            animate={{opacity:1,y:0}}
            className="text-sm font-medium text-emerald-600">
              Settings saved
            </motion.span>
           }
            </div>
         </motion.div>
      </div>
    </div>
  )
}

export default DashboardClient
