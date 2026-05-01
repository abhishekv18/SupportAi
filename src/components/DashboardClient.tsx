// 'use client'
// import axios from 'axios';
// import { AnimatePresence, motion } from 'motion/react'
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { Menu, X } from "lucide-react";
// const DashboardClient = ({ ownerId }:{ ownerId?: string }) => {
//       const navigate=useRouter();
//       const [open, setOpen] = useState(false);
//       const [businessName, setBusinessName] = useState("");
//        const [businessEmail, setBusinessEmail] = useState("");
//         const [knowledge,setKnowledge] = useState("");
//         const[loading,setLoading]=useState(false);
//         const [saved,setSaved]=useState(false);
//         const handleSetting=async()=>{
//           setLoading(true);
//           try {
//             console.log({ownerId,businessName,businessEmail,knowledge});
//             const response=await axios.post("/api/seeting",{ownerId,businessName,businessEmail,knowledge});
//              console.log(response.data);
//              setLoading(false);
//              setSaved(true);
//              setTimeout(()=>setSaved(false),3000);
//           } catch (error) {
//             console.log(error);
//               setLoading(false);
//           }
//         }
//  const handleLogout = async() => {
//     try {
//       const response=await axios.get("/api/auth/logout");
//        window.location.href = "/";
//     } catch (error) {
//       console
// .log("Logout error:", error);
//     }
//   }
//         useEffect(()=>{
//               const handleGetSetting=async()=>{
//           try {
//             const result=await axios.post("/api/seeting/get",{ownerId});
//             console.log(result.data);
//             setBusinessName(result.data.businessName);
//             setBusinessEmail(result.data.businessEmail);
//             console.log(result.data.knowledge);
//             setKnowledge(result.data.knowledge);
//           } catch (error) {
//             console.log(error);
//               setLoading(false);
//           }
//         }
//         handleGetSetting();
//         },[ownerId]);

//   return (
//     <div className='min-h-screen bg-zinc-50 text-zinc-900'>
//       {/* <motion.div className='fixed left-0 top-0 w-full z-50 bg-white/70 border-b backdrop-blur-xl border-zinc-200 ' initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
//         <div className='flex justify-between items-center max-w-7xl mx-auto h-16 px-6'>
//           <div className='text-xl font-semibold tracking-tight cursor-pointer' onClick={()=>navigate.push("/")}>
//             Support<span className='text-zinc-400'>AI</span>
//           </div>
//          <div className='flex gap-2 justify-center items-center'>
//            <button onClick={()=>navigate.push("/embed")} className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition cursor-pointer'>
//             Embed Chatbot
//           </button>
//            <button onClick={()=>navigate.push("/")} className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition cursor-pointer'>
//             Home
//           </button>
//           <button onClick={handleLogout} className='px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-300 text-sm transition cursor-pointer'>
//             Logout
//           </button>
//          </div>
        


//         </div>
//       </motion.div> */}
// <motion.div 
//   className='fixed left-0 top-0 w-full z-50 bg-white/70 border-b backdrop-blur-xl border-zinc-200' 
//   initial={{ y: -50 }} 
//   animate={{ y: 0 }} 
//   transition={{ duration: 0.7 }}
// >
//   <div className='flex justify-between items-center max-w-7xl mx-auto h-16 px-4 sm:px-6'>
    
//     {/* Logo */}
//     <div 
//       className='text-lg sm:text-xl font-semibold tracking-tight cursor-pointer' 
//       onClick={()=>navigate.push("/")}
//     >
//       Support<span className='text-zinc-400'>AI</span>
//     </div>

//     {/* Desktop Buttons */}
//     <div className='hidden md:flex gap-2 items-center'>
//       <button onClick={()=>navigate.push("/embed")} className='cursor-pointer px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition'>
//         Embed Chatbot
//       </button>

//       <button onClick={()=>navigate.push("/")} className='cursor-pointer px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition'>
//         Home
//       </button>

//       <button onClick={handleLogout} className='cursor-pointer px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm hover:bg-zinc-700 transition'>
//         Logout
//       </button>
//     </div>

//     {/* Mobile Toggle */}
//     <div className="md:hidden">
//       <button onClick={() => setOpen(!open)}>
//         {open ? <X size={22} /> : <Menu size={22} />}
//       </button>
//     </div>
//   </div>

//   {/* Mobile Dropdown */}
//   {open && (
//     <div className="md:hidden px-4 pb-4">
//       <div className="flex flex-col gap-2 bg-white rounded-xl shadow-lg p-3 border border-zinc-200">
        
//         <button
//           onClick={() => {
//             navigate.push("/embed");
//             setOpen(false);
//           }}
//           className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 text-sm"
//         >
//           Embed Chatbot
//         </button>

//         <button
//           onClick={() => {
//             navigate.push("/");
//             setOpen(false);
//           }}
//           className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 text-sm"
//         >
//           Home
//         </button>

//         <button
//           onClick={() => {
//             handleLogout();
//             setOpen(false);
//           }}
//           className="text-left px-4 py-2 rounded-lg bg-zinc-800 text-white text-sm hover:bg-zinc-700"
//         >
//           Logout
//         </button>

//       </div>
//     </div>
//   )}
// </motion.div>
//       <div className='px-4 py-14 flex justify-center mt-20'>
//          <motion.div className='w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10'>
//             <div className='mb-10'>
//                 <h1 className='text-2xl font-semibold'>ChatBot Settings</h1>
//                 <p className='text-zinc-500 mt-1'>Manage your chatbot configuration and preferences.</p>
//             </div>
//             <div className='mb-10'>
//                 <h1 className='text-lg font-medium mb-4'>Business Details</h1>
//                 <div className='space-y-4'>
//                     <input type='text' placeholder='Business Name' className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' onChange={(e)=>setBusinessName(e.target.value)} value={businessName}/>
//                     <input type='email' placeholder='Support Email' className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' onChange={(e)=>setBusinessEmail(e.target.value)} value={businessEmail}/>
//                 </div>
//             </div>
//              <div className='mb-10'>
//                 <h1 className='text-lg font-medium mb-4'>Knowledge Base</h1>
//                 <p className='text-sm text-zinc-500 mb-4'>Add FAQs, policies, and other information to help your chatbot provide accurate responses.</p>
//                 <div className='space-y-4'>
//                     <textarea placeholder={`Example:
//                       Refund Policy:7 days return policy for all products.
//                       Delivery Time: Orders are processed within 24 hours and delivered within 3-5 business days.
//                       Cash on Delivery: Available for orders under $100. Not available for international orders.
//                       Contact Support: For any inquiries, please contact our support team.

//                       `} onChange={(e)=>setKnowledge(e.target.value)} value={knowledge} className='w-full h-54 rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' />
//                 </div>
//             </div>
//             <div className='flex items-center gap-5'>
//            <motion.button className='px-7 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition cursor-pointer disabled:opacity-60' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={loading} onClick={handleSetting}>
//                {loading?"Saving...":"Save"}
//            </motion.button>
//            {
//             saved && <motion.span
//             initial={{opacity:0,y:6}}
//             animate={{opacity:1,y:0}}
//             className="text-sm font-medium text-emerald-600">
//               Settings saved
//             </motion.span>
//            }
//             </div>
//          </motion.div>
//       </div>
//     </div>
//   )
// }

// export default DashboardClient
'use client'

import axios from 'axios'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Bot, Code2, Home, LogOut, Menu, Save, X } from 'lucide-react'

const DashboardClient = ({ ownerId }: { ownerId?: string }) => {
  const navigate = useRouter()

  const [open, setOpen] = useState(false)
  const [businessName, setBusinessName] = useState('')
  const [businessEmail, setBusinessEmail] = useState('')
  const [knowledge, setKnowledge] = useState('')
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSetting = async () => {
    setLoading(true)

    try {
      await axios.post('/api/seeting', {
        ownerId,
        businessName,
        businessEmail,
        knowledge,
      })

      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout')
      window.location.href = '/'
    } catch (error) {
      console.log('Logout error:', error)
    }
  }

  useEffect(() => {
    const handleGetSetting = async () => {
      try {
        const result = await axios.post('/api/seeting/get', { ownerId })

        setBusinessName(result.data.businessName || '')
        setBusinessEmail(result.data.businessEmail || '')
        setKnowledge(result.data.knowledge || '')
      } catch (error) {
        console.log(error)
      }
    }

    if (ownerId) {
      handleGetSetting()
    }
  }, [ownerId])

  const navItems = [
    {
      label: 'Embed Chatbot',
      icon: Code2,
      action: () => navigate.push('/embed'),
    },
    {
      label: 'Home',
      icon: Home,
      action: () => navigate.push('/'),
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-zinc-950">
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

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              )
            })}

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm md:hidden"
            aria-label="Open navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-zinc-200 bg-white px-5 py-4 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        item.action()
                        setOpen(false)
                      }}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                    >
                      <Icon size={17} />
                      {item.label}
                    </button>
                  )
                })}

                <button
                  onClick={() => {
                    handleLogout()
                    setOpen(false)
                  }}
                  className="mt-1 flex items-center gap-3 rounded-lg bg-zinc-950 px-3 py-3 text-left text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="px-5 pb-12 pt-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <Bot size={16} />
                Chatbot control panel
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                Configure your SupportAI assistant.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
                Add your business details and knowledge base so your chatbot can answer
                customers with accurate, useful, and brand-safe responses.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-zinc-950">Setup status</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Business name</span>
                  <span className={businessName ? 'font-semibold text-emerald-600' : 'font-semibold text-zinc-400'}>
                    {businessName ? 'Added' : 'Missing'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Support email</span>
                  <span className={businessEmail ? 'font-semibold text-emerald-600' : 'font-semibold text-zinc-400'}>
                    {businessEmail ? 'Added' : 'Missing'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Knowledge base</span>
                  <span className={knowledge ? 'font-semibold text-emerald-600' : 'font-semibold text-zinc-400'}>
                    {knowledge ? 'Added' : 'Missing'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
          >
            <div className="border-b border-zinc-200 px-6 py-5 md:px-8">
              <h2 className="text-lg font-bold text-zinc-950">Chatbot settings</h2>
              <p className="mt-1 text-sm text-zinc-500">
                This information is used to shape how your assistant responds.
              </p>
            </div>

            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">
                  Business details
                </h3>

                <div className="mt-5 space-y-4">
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-700">
                      Business name
                    </span>
                    <input
                      type="text"
                      placeholder="Example: Acme Store"
                      className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/10"
                      onChange={(e) => setBusinessName(e.target.value)}
                      value={businessName}
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-700">
                      Support email
                    </span>
                    <input
                      type="email"
                      placeholder="support@yourbusiness.com"
                      className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/10"
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      value={businessEmail}
                    />
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">
                  Knowledge base
                </h3>

                <label className="mt-5 block">
                  <span className="text-sm font-semibold text-zinc-700">
                    Business information, FAQs, policies, and support rules
                  </span>
                  <textarea
                    placeholder={`Refund policy: Returns are accepted within 7 days.

Delivery time: Orders are processed within 24 hours and delivered within 3-5 business days.

Cash on delivery: Available for selected locations.

Support contact: Customers can contact our team for order, delivery, or product questions.`}
                    onChange={(e) => setKnowledge(e.target.value)}
                    value={knowledge}
                    className="mt-2 h-72 w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/10"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-zinc-200 bg-zinc-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <p className="text-sm text-zinc-500">
                Save changes after updating your business details or knowledge base.
              </p>

              <div className="flex items-center gap-4">
                <AnimatePresence>
                  {saved && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="text-sm font-semibold text-emerald-600"
                    >
                      Settings saved
                    </motion.span>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  onClick={handleSetting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Save size={16} />
                  {loading ? 'Saving...' : 'Save settings'}
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-5 py-6 text-center text-sm font-medium text-zinc-500 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} SupportAI</p>
          <p>Made with ❤️ by Abhishek</p>
        </div>
      </footer>
    </div>
  )
}

export default DashboardClient
