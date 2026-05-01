// 'use client'
// import React, { useState } from 'react'
// import { AnimatePresence, motion } from 'motion/react'
// import axios from 'axios'
// import { useRouter } from 'next/navigation'
// import { set } from 'mongoose'
// const HomeClients = ({ email }: { email?: string }) => {
//   const [loading, setLoading] = useState(false);
//   const handleLogin = () => {
//     setLoading(true);
//     window.location.href = "/api/auth/login";
//   }
//   const handleLogout = async() => {
//     try {
//       const response=await axios.get("/api/auth/logout");
//        window.location.href = "/";
//     } catch (error) {
//       console
// .log("Logout error:", error);
//     }
//   }

//   const navigate=useRouter();
//   const firstLetter = email ? email[0].toUpperCase() : "U";
//   const [open, setOpen] = useState(false);
//   const features=[
//     {
//       title:"24/7 Customer Support",
//       description:"Provide instant support to your customers around the clock with our AI-powered assistant."
//     },
//     {
//       title:"Plug-and-Play Integration",
//       description:"Easily add our AI assistant to your website with just a few lines of code and start providing better support in minutes."
//     },
//     {
//       title:"Admin Controlled",
//       description:"Easily manage and customize your AI assistant's responses, behavior, and appearance from our user-friendly dashboard."
//     },
//   ]
//   return (
//     <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden'>
//       <motion.div className='fixed left-0 top-0 w-full z-50 bg-white/70 border-b backdrop-blur-xl border-zinc-200 ' initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
//         <div className='flex justify-between items-center max-w-7xl mx-auto h-16 px-6'>
//           <div className='text-xl font-semibold tracking-tight cursor-pointer' onClick={()=>navigate.push("/")}>
//             Support<span className='text-zinc-400'>AI</span>
//           </div>
//           {email ? <div className='relative'>
//             <button className='w-10 h-10 cursor-pointer rounded-full bg-black text-white font-semibold flex items-center justify-center hover:scale-105 transition' onClick={() => setOpen(!open)}>{firstLetter}</button>
//             <AnimatePresence>
//               {open && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -6 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -6 }}
//                   className='absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl  border border-zinc-200 overflow-hidden'>
//                   <button className='w-full px-4 text-left py-3 text-sm hover:bg-zinc-100 cursor-pointer' onClick={()=>navigate.push("/dashboard")}>Dashboard</button>
//                   <button className='block px-4 py-3 text-sm text-red-600 hover:bg-zinc-100 cursor-pointer' onClick={handleLogout}>Logout</button>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//           </div> : <button className='px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2 cursor-pointer' onClick={handleLogin} disabled={loading}>
//          {loading ? "Loading..." : "Login"}
//           </button>}

//         </div>
//       </motion.div>
//       <section className='pt-36 pb-28 px-6 '>
//         <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl'>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className='text-4xl md:text-5xl font-semibold leading-tight '>
//               AI Customer Support<br />
//               Built For Modern Websites
//             </h1>
//             <p className='mt-6 text-lg text-zinc-600 max-w-xl'>
//               Add a powerful AI assistant to your website in minutes. Answer customer questions, generate leads, and provide instant support around the clock with our easy-to-use platform.
//             </p>
//             <div className='flex gap-4 mt-10'>
//               {email ? <button className='px-7 py-3 cursor-pointer bg-black text-white rounded-xl font-medium hover:bg-zinc-800 transition disabled:opacity-60' onClick={()=>navigate.push("/dashboard")}>
//                 Go To Dashboard
//               </button> : <button
//                 onClick={handleLogin}
//                 className='px-7 cursor-pointer py-3 bg-black text-white rounded-xl font-medium hover:bg-zinc-800 transition disabled:opacity-60'>
//                 Get Started
//               </button>}
//               <a
//                 href='#features'
//                 className='px-7 cursor-pointer py-3 text-zinc-700 border border-zinc-300 rounded-xl font-medium hover:bg-zinc-100 transition disabled:opacity-60'>
//                 Learn More
//               </a>
//             </div>

//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className='relative'
//           >
//             <div className='rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6'>
//               <div className='text-sm text-zinc-500 mb-3'>
//                 Live Chat Preview
//               </div>
//               <div className='space-y-3'>
//                 <div className='bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit'>Do you offer cash on dilvery?</div>
//                 <div className='bg-zinc-100 rounded-lg px-4 py-2 text-sm w-fit'>Yes, cash on delivery is available.</div>
//               </div>
//               <motion.div
//                 animate={{ y: [0, -12, 0] }}
//                 transition={{ repeat: Infinity, duration: 3 }}
//                 className='absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl'
//               >
//                 🗨️
//               </motion.div>
//             </div>

//           </motion.div>
//         </div>
//       </section>
//       <section
//         id='features'
//         className='bg-zinc-50 py-28 px-6 border-t border-zinc-200'>
//         <div className='max-w-6xl mx-auto'>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.5 }}
//             className='text-center font-semibold text-3xl'
//           >
//             Why Business Choose SupportAI?
//           </motion.h2>

//           <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
// {
//   features.map((feature,index)=> (
//       <motion.div
//       key={index}
//        initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ delay: index*0.1 }}
//       className=' bg-white roundex-2xl p-8 shadow-lg border border-zinc-200'
//       >
//             <h1 className='text-lg font-medium'>{feature.title}</h1>
//             <p className='text-zinc-600 mt-3 text-sm'>{feature.description}</p>  
//       </motion.div>
//   ))
//   }
//           </div>
//         </div>
//       </section>
//       <footer className='py-10 text-center text-sm text-zinc-500'>
//         &copy;{new Date().getFullYear()} SupportAI. All rights reserved.
//       </footer>
//     </div>
//   )
// }

// export default HomeClients

'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { LayoutDashboard, LogOut } from 'lucide-react'

const HomeClients = ({ email }: { email?: string }) => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useRouter()

  const handleLogin = () => {
    setLoading(true)
    window.location.href = '/api/auth/login'
  }

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout')
      window.location.href = '/'
    } catch (error) {
      console.log('Logout error:', error)
    }
  }

  const firstLetter = email ? email[0].toUpperCase() : 'U'

  const features = [
    {
      title: 'Instant customer answers',
      description:
        'Resolve common questions about orders, pricing, returns, delivery, and services before they become support tickets.',
      accent: 'bg-emerald-500',
    },
    {
      title: 'Simple website installation',
      description:
        'Add SupportAI to your business website quickly and give customers a clean chat experience from day one.',
      accent: 'bg-sky-500',
    },
    {
      title: 'Controlled by your team',
      description:
        'Keep your assistant aligned with your business policies, tone, and customer support process.',
      accent: 'bg-amber-500',
    },
  ]

  const metrics = [
    ['24/7', 'Customer availability'],
    ['Fast', 'Website setup'],
    ['Smart', 'Support automation'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fb] text-zinc-950">
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            onClick={() => navigate.push('/')}
            className="text-left text-xl font-bold tracking-tight"
          >
            Support<span className="text-emerald-600">AI</span>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a href="#features" className="transition hover:text-zinc-950">
              Features
            </a>
            <a href="#preview" className="transition hover:text-zinc-950">
              Preview
            </a>
            <a href="#launch" className="transition hover:text-zinc-950">
              Launch
            </a>
          </nav>

          {email ? (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                aria-label="Open account menu"
              >
                {firstLetter}
              </button>

             <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      className="absolute right-0 mt-3 w-52 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl"
    >
      <button
        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
        onClick={() => navigate.push('/dashboard')}
      >
        <LayoutDashboard size={16} className="text-zinc-500" />
        Dashboard
      </button>

      <button
        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
        onClick={handleLogout}
      >
        <LogOut size={16} className="text-red-500" />
        Logout
      </button>
    </motion.div>
  )}
</AnimatePresence>

            </div>
          ) : (
            <button
              onClick={handleLogin}
              disabled={loading}
              className="rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          )}
        </div>
      </motion.header>

      <main>
        <section className="relative px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.13),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_28%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Built for businesses that care about fast replies
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 md:text-6xl">
                Professional AI chat support for your business website.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                SupportAI helps businesses give customers quick, reliable answers
                without keeping a support team online every hour. Install it on your
                website, guide visitors, answer repeated questions, and create a
                smoother support experience.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {email ? (
                  <button
                    onClick={() => navigate.push('/dashboard')}
                    className="rounded-lg bg-zinc-950 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-zinc-800"
                  >
                    Go to Dashboard
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="rounded-lg bg-zinc-950 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? 'Starting...' : 'Get Started'}
                  </button>
                )}

                <a
                  href="#features"
                  className="rounded-lg border border-zinc-300 bg-white px-7 py-3.5 text-center text-sm font-bold text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
                >
                  View Features
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {metrics.map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-zinc-200 bg-white/80 p-4 shadow-sm"
                  >
                    <div className="text-2xl font-bold text-zinc-950">{value}</div>
                    <div className="mt-1 text-xs font-medium text-zinc-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="preview"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-lg border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/70">
                <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                  <div>
                    <div className="text-sm font-bold text-zinc-950">
                      SupportAI Chat
                    </div>
                    <div className="text-xs font-medium text-emerald-600">
                      Online now
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Live
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="max-w-[82%] rounded-lg bg-zinc-100 px-4 py-3 text-sm leading-6 text-zinc-700">
                    Hi, do you offer cash on delivery?
                  </div>

                  <div className="ml-auto max-w-[84%] rounded-lg bg-zinc-950 px-4 py-3 text-sm leading-6 text-white">
                    Yes. Cash on delivery is available for selected locations. You can
                    check availability during checkout.
                  </div>

                  <div className="max-w-[82%] rounded-lg bg-zinc-100 px-4 py-3 text-sm leading-6 text-zinc-700">
                    Can I track my order after purchase?
                  </div>

                  <div className="ml-auto max-w-[84%] rounded-lg bg-zinc-950 px-4 py-3 text-sm leading-6 text-white">
                    Absolutely. Once your order is confirmed, you will receive tracking
                    details by email or SMS.
                  </div>
                </div>

                <div className="border-t border-zinc-200 p-4">
                  <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-400">
                    Ask anything about orders, delivery, returns...
                    <span className="ml-auto rounded-md bg-zinc-950 px-3 py-1.5 text-xs font-bold text-white">
                      Send
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-5 -right-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-xl md:-right-6"
              >
                <div className="text-xs font-bold text-zinc-950">Response time</div>
                <div className="mt-1 text-lg font-black text-emerald-600">
                  Instant
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section
          id="features"
          className="border-y border-zinc-200 bg-white px-5 py-20 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                Why SupportAI
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                A cleaner support experience for your customers and your team.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-lg border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`mb-6 h-10 w-10 rounded-lg ${feature.accent}`} />
                  <h3 className="text-lg font-bold text-zinc-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="launch" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl rounded-lg bg-zinc-950 px-6 py-12 text-white md:px-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Give your website a support team that never sleeps.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
                  Start with a clean AI chat assistant, improve customer response time,
                  and manage your support experience from one simple dashboard.
                </p>
              </div>

              {email ? (
                <button
                  onClick={() => navigate.push('/dashboard')}
                  className="rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-zinc-100"
                >
                  Open Dashboard
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Loading...' : 'Start Now'}
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-bold tracking-tight text-zinc-950">
              Support<span className="text-emerald-600">AI</span>
            </div>
            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
              AI-powered customer support for businesses that want faster replies,
              happier customers, and fewer repeated support tasks.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm font-medium text-zinc-500 md:items-end">
            <div className="flex gap-5">
              <a href="#features" className="transition hover:text-zinc-950">
                Features
              </a>
              <a href="#preview" className="transition hover:text-zinc-950">
                Preview
              </a>
              <a href="#launch" className="transition hover:text-zinc-950">
                Get Started
              </a>
            </div>

            <p>
              &copy; {new Date().getFullYear()} SupportAI. Made with ❤️ by
              Abhishek.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeClients
