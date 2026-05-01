// 'use client'
// import { motion, MotionConfig } from 'motion/react';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'

// const EmbedClients = ({ ownerId }:{ ownerId?: string }) => {
//      const navigate=useRouter();
//      const embedCode=`
//     <script 
//          src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js"
//          data-owner-id="${ownerId}">
//     </script>
//      `
//      const [copied,setCopied]=useState(false);
//      const handleCopy=()=>{
//         navigator.clipboard.writeText(embedCode);
//         setCopied(true);
//         setTimeout(()=>setCopied(false),2000);
//      }
//   return (
//     <div className='min-h-screen bg-zinc-50 text-zinc-900'>
//       <div className='sticky top-0 z-40 bg-white border-b border-zinc-200'>
//        <div className='flex justify-between items-center max-w-7xl mx-auto h-16 px-6'>
//           <div className='text-xl font-semibold tracking-tight cursor-pointer' onClick={()=>navigate.push("/")}>
//             Support<span className='text-zinc-400'>AI</span>
//           </div>
//           <button onClick={()=>navigate.push("/dashboard")} className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition cursor-pointer'>
//             Back to Dashboard
//           </button>
//         </div>
//       </div>




//       <div className='flex justify-center px-4 py-14'>
//                <motion.div
//                initial={{opacity:0,y:24}}
//                animate={{opacity:1,y:0}}
//                transition={{duration:0.5}}
//                className='w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10'
//                >
//                      <h1 className='text-2xl font-semibold mb-2'>Embed Chatbot</h1>
//                      <p className='mb-2 '>Copy and paste this code before <code>&lt;/body&gt;</code></p>
//                      <div className='relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10'>
//                         <pre className='overflow-x-auto'>{embedCode}</pre>
//                         <button className='absolute top-3 right-3 bg-white cursor-pointer text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200  transition' onClick={handleCopy}>

//                             {copied ? "Copied!" : "Copy"}
//                         </button>
//                      </div>

//                      <ol className='space-y-3 text-sm text-zinc-600 list-decimal list-inside'>
//                         <li>
//                Copy the embed script
//                         </li>
//                         <li>Paste it before the closing body tag</li>
//                         <li> Reload your website</li>
//                      </ol>



//                      <div className='mt-14'>
//                     <h1 className='text-lg font-medium mb-2'>Live Preview</h1>
//                     <p className='text-sm text-zinc-500 mb-6'>This is how your chatbot will appear on your website</p>
//                     <div className='rounded-xl border border-zinc-300 bg-white shadow-md overflow-hidden'>
//                           <div className='flex items-center gap-2 bg-zinc-100 px-4 h-9 border-b border-zinc-300'>
//                           <span className='w-2.5 h-2.5 rounded-full bg-red-400'/>
//                              <span className='w-2.5 h-2.5 rounded-full bg-yellow-400'/>
//                                 <span className='w-2.5 h-2.5 rounded-full bg-green-400'/>
//                                 <span className='ml-4 text-sm text-zinc-400'>Your-website.com</span>
//                           </div>

//                           <div className='relative h-64 sm:h-72 p-6 text-zinc-400 text-sm'>
//                                 Your website goes here
//                                 <div className='absolute bottom-24 right-6 w-64 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden'>
//   <div className='bg-gradient-to-br from-[#1F2A44] to-[#243A5E] text-white text-xs px-3 py-2 flex justify-between items-center'>
//     <span>Support Assistant</span>
//     <span>X</span>
//   </div>

//   <div className='p-3 space-y-2 bg-zinc-50'>
//     <div className='bg-zinc-100 text-zinc-800 text-xs px-3 py-2 rounded-lg w-fit'>
//       hi! how can I help you?
//     </div>
//     <div className='bg-gradient-to-br from-[#1F2A44] to-[#243A5E] text-white text-xs px-3 py-2 rounded-lg ml-auto w-fit'>
//       what is the return policy
//     </div>
//   </div>
// </div>
// <motion.div
//   animate={{ y: [0, -8, 0] }}
//   transition={{ repeat: Infinity }}
//   className="
//     absolute bottom-6 right-6
//     w-14 h-14 rounded-full
//     bg-gradient-to-br from-[#1F2A44] to-[#243A5E] text-white
//     flex items-center justify-center
//     shadow-2xl
//     cursor-pointer
//   "
// >
//     <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-6 h-6"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M2 5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H8l-4 4v-4H5a3 3 0 01-3-3V5z" />
//   </svg>
  
// </motion.div>
//                           </div>
                        
//                     </div>
//                      </div>
//                </motion.div>
//       </div>

//     </div>
//   )
// }

// export default EmbedClients
'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useRouter } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import {
  ArrowLeft,
  Check,
  Clipboard,
  Code2,
  Globe,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'

const EmbedClients = ({ ownerId }: { ownerId?: string }) => {
  const navigate = useRouter()
  const [copied, setCopied] = useState(false)

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || ''

  const embedCode = useMemo(
    () => `<script
  src="${appUrl}/chatBot.js"
  data-owner-id="${ownerId || ''}">
</script>`,
    [appUrl, ownerId]
  )

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.log('Copy failed:', error)
    }
  }

  const steps = [
    'Copy your SupportAI embed script.',
    'Paste it before the closing </body> tag on your website.',
    'Reload your website and test the chatbot widget.',
  ]

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-zinc-950">
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            onClick={() => navigate.push('/')}
            className="text-left text-xl font-bold tracking-tight"
          >
            Support<span className="text-emerald-600">AI</span>
          </button>

          <button
            onClick={() => navigate.push('/dashboard')}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <ArrowLeft size={16} />
            Dashboard
          </button>
        </div>
      </motion.header>

      <main className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <Code2 size={16} />
                Website installation
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                Embed your SupportAI chatbot.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
                Add this script to your website to display the SupportAI chat widget.
                Once installed, your customers can start asking questions directly from
                your site.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-zinc-950">Installation checklist</p>

              <div className="mt-4 space-y-3">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-3 text-sm">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="leading-6 text-zinc-600">{step}</p>
                  </div>
                ))}
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
              <h2 className="text-lg font-bold text-zinc-950">Embed script</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Paste this code before the closing{' '}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-800">
                  &lt;/body&gt;
                </code>{' '}
                tag of your website.
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-xl shadow-zinc-200/80">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-bold text-zinc-950 transition hover:bg-zinc-100"
                  >
                    {copied ? <Check size={14} /> : <Clipboard size={14} />}
                    {copied ? 'Copied' : 'Copy code'}
                  </button>
                </div>

                <pre className="overflow-x-auto p-5 text-sm leading-7 text-zinc-100">
                  <code>{embedCode}</code>
                </pre>
              </div>

              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
                  >
                    <Check size={16} />
                    Embed code copied to clipboard
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>

          <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-bold text-zinc-950">Before you publish</h2>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Globe size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-950">
                      Use your live website
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      Install the script on the pages where customers usually need help.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                    <MessageCircle size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-950">
                      Test common questions
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      Ask about delivery, refunds, contact details, pricing, and support
                      policies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <ShieldCheck size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-950">
                      Keep answers accurate
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      Update your dashboard knowledge base whenever your business
                      policies change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
            >
              <div className="border-b border-zinc-200 px-5 py-4">
                <h2 className="text-lg font-bold text-zinc-950">Live preview</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  A sample view of how the widget appears on a website.
                </p>
              </div>

              <div className="p-5">
                <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
                  <div className="flex h-10 items-center gap-2 border-b border-zinc-200 bg-zinc-100 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-3 truncate text-xs font-medium text-zinc-500">
                      your-business.com
                    </span>
                  </div>

                  <div className="relative h-[360px] bg-[#f8fafc] p-6">
                    <div className="max-w-sm">
                      <div className="h-4 w-32 rounded bg-zinc-200" />
                      <div className="mt-4 h-3 w-64 rounded bg-zinc-200" />
                      <div className="mt-2 h-3 w-52 rounded bg-zinc-200" />
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-lg border border-zinc-200 bg-white" />
                        <div className="h-20 rounded-lg border border-zinc-200 bg-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-24 right-5 w-[280px] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-2xl">
                      <div className="flex items-center justify-between bg-zinc-950 px-4 py-3 text-white">
                        <div>
                          <div className="text-xs font-bold">Support Assistant</div>
                          <div className="text-[11px] text-emerald-300">Online</div>
                        </div>
                        <span className="text-xs font-bold text-zinc-300">X</span>
                      </div>

                      <div className="space-y-3 bg-zinc-50 p-4">
                        <div className="w-fit max-w-[85%] rounded-lg bg-white px-3 py-2 text-xs leading-5 text-zinc-700 shadow-sm">
                          Hi, how can I help you today?
                        </div>
                        <div className="ml-auto w-fit max-w-[85%] rounded-lg bg-zinc-950 px-3 py-2 text-xs leading-5 text-white">
                          What is your return policy?
                        </div>
                        <div className="w-fit max-w-[85%] rounded-lg bg-white px-3 py-2 text-xs leading-5 text-zinc-700 shadow-sm">
                          Returns are accepted within 7 days if the product is unused
                          and in original condition.
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="absolute bottom-6 right-6 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-zinc-950 text-white shadow-2xl"
                    >
                      <MessageCircle size={24} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
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

export default EmbedClients
