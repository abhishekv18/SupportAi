'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { set } from 'mongoose'
const HomeClients = ({ email }: { email?: string }) => {
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    window.location.href = "/api/auth/login";
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

  const navigate=useRouter();
  const firstLetter = email ? email[0].toUpperCase() : "U";
  const [open, setOpen] = useState(false);
  const features=[
    {
      title:"24/7 Customer Support",
      description:"Provide instant support to your customers around the clock with our AI-powered assistant."
    },
    {
      title:"Plug-and-Play Integration",
      description:"Easily add our AI assistant to your website with just a few lines of code and start providing better support in minutes."
    },
    {
      title:"Admin Controlled",
      description:"Easily manage and customize your AI assistant's responses, behavior, and appearance from our user-friendly dashboard."
    },
  ]
  return (
    <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden'>
      <motion.div className='fixed left-0 top-0 w-full z-50 bg-white/70 border-b backdrop-blur-xl border-zinc-200 ' initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
        <div className='flex justify-between items-center max-w-7xl mx-auto h-16 px-6'>
          <div className='text-xl font-semibold tracking-tight cursor-pointer' onClick={()=>navigate.push("/")}>
            Support<span className='text-zinc-400'>AI</span>
          </div>
          {email ? <div className='relative'>
            <button className='w-10 h-10 cursor-pointer rounded-full bg-black text-white font-semibold flex items-center justify-center hover:scale-105 transition' onClick={() => setOpen(!open)}>{firstLetter}</button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className='absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl  border border-zinc-200 overflow-hidden'>
                  <button className='w-full px-4 text-left py-3 text-sm hover:bg-zinc-100 cursor-pointer' onClick={()=>navigate.push("/dashboard")}>Dashboard</button>
                  <button className='block px-4 py-3 text-sm text-red-600 hover:bg-zinc-100 cursor-pointer' onClick={handleLogout}>Logout</button>
                </motion.div>
              )}
            </AnimatePresence>

          </div> : <button className='px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2 cursor-pointer' onClick={handleLogin} disabled={loading}>
         {loading ? "Loading..." : "Login"}
          </button>}

        </div>
      </motion.div>
      <section className='pt-36 pb-28 px-6 '>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className='text-4xl md:text-5xl font-semibold leading-tight '>
              AI Customer Support<br />
              Built For Modern Websites
            </h1>
            <p className='mt-6 text-lg text-zinc-600 max-w-xl'>
              Add a powerful AI assistant to your website in minutes. Answer customer questions, generate leads, and provide instant support around the clock with our easy-to-use platform.
            </p>
            <div className='flex gap-4 mt-10'>
              {email ? <button className='px-7 py-3 cursor-pointer bg-black text-white rounded-xl font-medium hover:bg-zinc-800 transition disabled:opacity-60' onClick={()=>navigate.push("/dashboard")}>
                Go To Dashboard
              </button> : <button
                onClick={handleLogin}
                className='px-7 cursor-pointer py-3 bg-black text-white rounded-xl font-medium hover:bg-zinc-800 transition disabled:opacity-60'>
                Get Started
              </button>}
              <a
                href='#features'
                className='px-7 cursor-pointer py-3 text-zinc-700 border border-zinc-300 rounded-xl font-medium hover:bg-zinc-100 transition disabled:opacity-60'>
                Learn More
              </a>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className='relative'
          >
            <div className='rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6'>
              <div className='text-sm text-zinc-500 mb-3'>
                Live Chat Preview
              </div>
              <div className='space-y-3'>
                <div className='bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit'>Do you offer cash on dilvery?</div>
                <div className='bg-zinc-100 rounded-lg px-4 py-2 text-sm w-fit'>Yes, cash on delivery is available.</div>
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className='absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl'
              >
                🗨️
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>
      <section
        id='features'
        className='bg-zinc-50 py-28 px-6 border-t border-zinc-200'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className='text-center font-semibold text-3xl'
          >
            Why Business Choose SupportAI?
          </motion.h2>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
{
  features.map((feature,index)=> (
      <motion.div
      key={index}
       initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index*0.1 }}
      className=' bg-white roundex-2xl p-8 shadow-lg border border-zinc-200'
      >
            <h1 className='text-lg font-medium'>{feature.title}</h1>
            <p className='text-zinc-600 mt-3 text-sm'>{feature.description}</p>  
      </motion.div>
  ))
  }
          </div>
        </div>
      </section>
      <footer className='py-10 text-center text-sm text-zinc-500'>
        &copy;{new Date().getFullYear()} SupportAI. All rights reserved.
      </footer>
    </div>
  )
}

export default HomeClients
