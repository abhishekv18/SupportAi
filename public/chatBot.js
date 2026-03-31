// (function(){


// const api_url="http://localhost:3000/api/chat"


// const scriptTag=document.currentScript;
// const ownerId=scriptTag.getAttribute("data-owner-id");

// if(!ownerId){
//     console.error("Owner ID is required to initialize the chat bot.");
//     return;
// }
// const button=document.createElement("div");
// button.innerHTML="🗨️"
// Object.assign(button.style, {
//   position: "fixed",
//   bottom: "24px",
//   right: "24px",
//   width: "56px",
//   height: "56px",
//   borderRadius: "50%",
//   background: "#000",
//   color: "#fff",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   fontSize: "22px",
//   boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
//   zIndex: "999999",
// });


//   document.body.appendChild(button);


//  const box = document.createElement("div");

// Object.assign(box.style, {
//   position: "fixed",
//   bottom: "90px",
//   right: "24px",
//   width: "320px",
//   height: "420px",
//   background: "#fff",
//   borderRadius: "14px",
//   boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
//   display: "none",
//   flexDirection: "column",
//   overflow: "hidden",
//   zIndex: "999999",
//   fontFamily: "Inter, system-ui, sans-serif",
// });



// box.innerHTML = `<div style="
//   background:#000;
//   color:#fff;
//   padding:12px 14px;
//   font-size:14px;
//   display:flex;
//   justify-content:space-between;
//   align-items:center;
// ">
//   <span>Customer Support</span>
//   <span id="chat-close" style="cursor:pointer;font-size:16px">✕</span>
// </div>

// <div id="chat-messages" style="
//   flex:1;
//   padding:12px;
//   overflow-y:auto;
//   background:#f9fafb;
//   display:flex;
//   flex-direction:column;
// ">
// </div>

// <div style="
//   display:flex;
//   border-top:1px solid #e5e7eb;
//   padding:8px;
//   gap:6px;
// ">
//   <input id="chat-input" type="text" style="
//     flex:1;
//     padding:8px 10px;
//     border:1px solid #d1d5db;
//     border-radius:8px;
//     font-size:13px;
//     outline:none;
//   " placeholder="Type a message" />
  
//  <button id="chat-send" style="
//   padding:8px 12px;
//   border:none;
//   background:#000;
//   color:#fff;
//   border-radius:8px;
//   font-size:13px;
//   cursor:pointer;
// ">send</button>
// </div>
// `;


// document.body.appendChild(box);


// button.onclick=()=>{
//     box.style.display=box.style.display==="none"?"flex":"none";
// }

// document.querySelector("#chat-close").onclick=()=>{
//     box.style.display="none";
// }

// const input = document.querySelector("#chat-input");
// const sendBtn = document.querySelector("#chat-send");
// const messageArea = document.querySelector("#chat-messages");


// function addMessage(text, from) {
//   const bubble = document.createElement("div");
//   bubble.innerHTML = text;

//   Object.assign(bubble.style, {
//     maxWidth: "78%",
//     padding: "8px 12px",
//     borderRadius: "14px",
//     fontSize: "13px",
//     lineHeight: "1.4",
//     marginBottom: "8px",
//     alignSelf: from === "user" ? "flex-end" : "flex-start",
//     background: from === "user" ? "#000" : "#e5e7eb",
//     color: from === "user" ? "#fff" : "#111",

//     /* bubble direction polish */
//     borderTopRightRadius: from === "user" ? "4px" : "14px",
//     borderTopLeftRadius: from === "user" ? "14px" : "4px",
//   });
// messageArea.appendChild(bubble);
// messageArea.scrollTop = messageArea.scrollHeight;
// }


// sendBtn.onclick=async()=>{
//      const text = input.value.trim();
//     if (!text) return;
//     addMessage(text, "user");
//     input.value = "";

//     const typing = document.createElement("div");
// typing.innerHTML = "Typing...";

// Object.assign(typing.style, {
//   fontSize: "12px",
//   color: "#6b7280",
//   marginBottom: "8px",
//   alignSelf: "flex-start",
// });

// messageArea.appendChild(typing);
// messageArea.scrollTop = messageArea.scrollHeight;
// try {
//     const response = await fetch(api_url, {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             ownerId,
//             message:text
//         })
//     })
//     const data = await response.json();
//     messageArea.removeChild(typing);
//     addMessage(data || "Sorry, I didn't understand that.", "ai");

// } catch (error) {
//     console.error("Error communicating with chat API:", error);
//     messageArea.removeChild(typing);
//     addMessage("Sorry, I'm having trouble right now. Please try again later.", "ai");
// }
// }

// })()//immediatly invoked function
(function () {

  const api_url = "https://support-ai-olive.vercel.app/api/chat";

  const scriptTag = document.currentScript;
  const ownerId = scriptTag.getAttribute("data-owner-id");

  if (!ownerId) {
    console.error("Owner ID is required to initialize the chat bot.");
    return;
  }

  /* ── INJECT FONTS & STYLES ── */
  const style = document.createElement("style");
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

    #_chatbot-btn {
      transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
    }
    #_chatbot-btn:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 20px 50px rgba(15,23,42,0.45) !important;
    }
    #_chatbot-btn:active {
      transform: scale(0.96);
    }
    #_chatbot-btn .btn-icon {
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    #_chatbot-btn.is-open .btn-icon-chat { opacity: 0; transform: scale(0.6) rotate(20deg); }
    #_chatbot-btn.is-open .btn-icon-close { opacity: 1; transform: scale(1) rotate(0deg); }
    #_chatbot-btn .btn-icon-close { opacity: 0; transform: scale(0.6) rotate(-20deg); position: absolute; }

    #_chatbot-box {
      transition: opacity 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1);
    }
    #_chatbot-box.hidden {
      opacity: 0;
      transform: translateY(16px) scale(0.97);
      pointer-events: none;
    }
    #_chatbot-box.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    #chat-messages::-webkit-scrollbar { width: 4px; }
    #chat-messages::-webkit-scrollbar-track { background: transparent; }
    #chat-messages::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 99px; }

    #chat-input {
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    #chat-input:focus {
      border-color: #1e293b !important;
      box-shadow: 0 0 0 3px rgba(15,23,42,0.08) !important;
      outline: none;
    }

    #chat-send {
      transition: background 0.2s ease, transform 0.15s ease;
    }
    #chat-send:hover { background: #1e293b !important; }
    #chat-send:active { transform: scale(0.94); }

    #chat-close {
      transition: background 0.15s ease, color 0.15s ease;
      border-radius: 6px;
      padding: 4px 6px;
    }
    #chat-close:hover {
      background: rgba(255,255,255,0.15) !important;
    }

    ._msg-bubble {
      animation: _msgIn 0.28s cubic-bezier(.34,1.4,.64,1) forwards;
    }
    @keyframes _msgIn {
      from { opacity: 0; transform: translateY(8px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    ._typing-dot {
      animation: _typingPulse 1.2s ease-in-out infinite;
    }
    ._typing-dot:nth-child(2) { animation-delay: 0.18s; }
    ._typing-dot:nth-child(3) { animation-delay: 0.36s; }
    @keyframes _typingPulse {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
      30% { transform: translateY(-4px); opacity: 1; }
    }

    ._pulse-ring {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 2px solid rgba(15,23,42,0.3);
      animation: _pulse 2.5s ease-out infinite;
    }
    @keyframes _pulse {
      0% { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(1.5); opacity: 0; }
    }

    /* ── RESPONSIVE: mobile fills full screen ── */
    @media (max-width: 480px) {
      #_chatbot-box {
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        border-radius: 0 !important;
      }
      #_chatbot-btn {
        bottom: 18px !important;
        right: 16px !important;
      }
    }

    @media (min-width: 481px) and (max-width: 600px) {
      #_chatbot-box {
        right: 12px !important;
        left: 12px !important;
        width: auto !important;
        bottom: 96px !important;
      }
    }
  `;
  document.head.appendChild(style);

  /* ── TOGGLE BUTTON ── */
  const button = document.createElement("div");
  button.id = "_chatbot-btn";
  Object.assign(button.style, {
    position: "fixed",
    bottom: "28px",
    right: "16px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "22px",
    boxShadow: "0 8px 32px rgba(15,23,42,0.35), 0 2px 8px rgba(15,23,42,0.2)",
    zIndex: "999999",
    position: "fixed",
  });

  button.innerHTML = `
    <div class="_pulse-ring"></div>
    <span class="btn-icon btn-icon-chat" style="line-height:1">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white" opacity="0.9"/>
        <circle cx="8" cy="10" r="1.2" fill="#0f172a"/>
        <circle cx="12" cy="10" r="1.2" fill="#0f172a"/>
        <circle cx="16" cy="10" r="1.2" fill="#0f172a"/>
      </svg>
    </span>
    <span class="btn-icon btn-icon-close" style="line-height:1">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </span>
  `;

  document.body.appendChild(button);

  /* ── CHAT BOX ── */
  const box = document.createElement("div");
  box.id = "_chatbot-box";
  box.classList.add("hidden");

  Object.assign(box.style, {
    position: "fixed",
    bottom: "104px",
    right: "16px",
    width: "min(360px, calc(100vw - 32px))",
    height: "min(520px, calc(100vh - 120px))",
    background: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 32px 80px rgba(15,23,42,0.22), 0 8px 24px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.06)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: "999999",
    fontFamily: "'DM Sans', system-ui, sans-serif",
  });

  box.innerHTML = `
    <!-- HEADER -->
    <div style="
      background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
      padding: 16px 18px 14px;
      display: flex;
      align-items: center;
      gap: 12px;
      position: relative;
      overflow: hidden;
    ">
      <!-- subtle grid texture -->
      <div style="
        position:absolute;inset:0;
        background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
        background-size: 20px 20px;
        pointer-events:none;
      "></div>

      <!-- avatar -->
      <div style="
        width: 40px; height: 40px;
        border-radius: 12px;
        background: rgba(255,255,255,0.12);
        border: 1.5px solid rgba(255,255,255,0.2);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        position: relative;
        z-index:1;
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z" fill="rgba(255,255,255,0.9)"/>
          <path d="M9 21h6v1H9z" fill="rgba(255,255,255,0.5)"/>
        </svg>
      </div>

      <!-- title block -->
      <div style="flex:1; position:relative; z-index:1;">
        <div style="font-size:14px; font-weight:600; color:#fff; letter-spacing:-0.01em; line-height:1.2;">Support Assistant</div>
        <div style="display:flex; align-items:center; gap:5px; margin-top:3px;">
          <span style="width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 6px rgba(74,222,128,0.7);flex-shrink:0;"></span>
          <span style="font-size:11px; color:rgba(255,255,255,0.65); font-weight:400;">Online · Typically replies instantly</span>
        </div>
      </div>

      <!-- close -->
      <span id="chat-close" style="
        cursor:pointer;
        color:rgba(255,255,255,0.7);
        font-size:18px;
        line-height:1;
        display:flex;
        align-items:center;
        justify-content:center;
        width:28px; height:28px;
        position:relative;z-index:1;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </span>
    </div>

    <!-- WELCOME BANNER -->
    <div style="
      background: #f8fafc;
      border-bottom: 1px solid #f1f5f9;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    ">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#0f172a" opacity="0.15" stroke="#0f172a" stroke-width="1.5"/>
      </svg>
      <span style="font-size:11.5px; color:#64748b; font-weight:400;">Your conversations are private & secure</span>
    </div>

    <!-- MESSAGES -->
    <div id="chat-messages" style="
      flex:1;
      padding:16px 14px;
      overflow-y:auto;
      background:#f8fafc;
      display:flex;
      flex-direction:column;
      gap:2px;
    ">
      <!-- welcome message injected via JS below -->
    </div>

    <!-- INPUT AREA -->
    <div style="
      background:#fff;
      border-top: 1px solid #f1f5f9;
      padding: 12px 14px;
      display:flex;
      flex-direction:column;
      gap:10px;
    ">
      <div style="display:flex; gap:8px; align-items:center;">
        <input id="chat-input" type="text" style="
          flex:1;
          padding: 10px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 13px;
          font-family: 'DM Sans', system-ui, sans-serif;
          background: #f8fafc;
          color: #0f172a;
          letter-spacing: -0.01em;
        " placeholder="Ask us anything..." />

        <button id="chat-send" style="
          width: 40px;
          height: 40px;
          border: none;
          background: #0f172a;
          color: #fff;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div style="text-align:center; font-size:10.5px; color:#cbd5e1; letter-spacing:0.02em; font-family:'DM Mono',monospace;">
        Powered by SupportAI
      </div>
    </div>
  `;

  document.body.appendChild(box);

  /* ── WELCOME MESSAGE ── */
  const messageArea = document.querySelector("#chat-messages");

  function injectWelcome() {
    const wrap = document.createElement("div");
    wrap.style.cssText = "display:flex;flex-direction:column;align-items:flex-start;gap:6px;margin-bottom:10px;";
    wrap.innerHTML = `
      <div style="
        display:flex;align-items:center;gap:7px;margin-bottom:2px;
      ">
        <div style="width:22px;height:22px;border-radius:7px;background:linear-gradient(135deg,#0f172a,#1e3a5f);display:flex;align-items:center;justify-content:center;">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z" fill="rgba(255,255,255,0.95)"/></svg>
        </div>
        <span style="font-size:11px;color:#94a3b8;font-weight:500;">Support Assistant</span>
      </div>
      <div class="_msg-bubble" style="
        background:#fff;
        color:#1e293b;
        padding:11px 14px;
        border-radius:4px 16px 16px 16px;
        font-size:13px;
        line-height:1.55;
        max-width:88%;
        box-shadow:0 1px 4px rgba(15,23,42,0.08);
        border:1px solid #f1f5f9;
        font-weight:400;
      ">
        👋 Hello! Welcome to our support center.<br><br>How can I assist you today?
      </div>
    `;
    messageArea.appendChild(wrap);
  }

  injectWelcome();

  /* ── TOGGLE LOGIC ── */
  button.onclick = () => {
    const isOpen = box.classList.contains("visible");
    if (isOpen) {
      box.classList.remove("visible");
      box.classList.add("hidden");
      button.classList.remove("is-open");
    } else {
      box.classList.remove("hidden");
      box.classList.add("visible");
      button.classList.add("is-open");
    }
  };

  document.querySelector("#chat-close").onclick = () => {
    box.classList.remove("visible");
    box.classList.add("hidden");
    button.classList.remove("is-open");
  };

  /* ── SEND MESSAGE ── */
  const input = document.querySelector("#chat-input");
  const sendBtn = document.querySelector("#chat-send");

  function addMessage(text, from) {
    const isUser = from === "user";

    const wrap = document.createElement("div");
    wrap.style.cssText = `
      display:flex;
      flex-direction:column;
      align-items:${isUser ? "flex-end" : "flex-start"};
      gap:4px;
      margin-bottom:6px;
    `;

    if (!isUser) {
      wrap.innerHTML = `
        <div style="display:flex;align-items:center;gap:7px;margin-bottom:2px;">
          <div style="width:22px;height:22px;border-radius:7px;background:linear-gradient(135deg,#0f172a,#1e3a5f);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z" fill="rgba(255,255,255,0.95)"/></svg>
          </div>
          <span style="font-size:11px;color:#94a3b8;font-weight:500;">Support Assistant</span>
        </div>
      `;
    }

    const bubble = document.createElement("div");
    bubble.classList.add("_msg-bubble");
    bubble.innerHTML = text;

    Object.assign(bubble.style, {
      maxWidth: "82%",
      padding: "10px 14px",
      borderRadius: isUser ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
      fontSize: "13px",
      lineHeight: "1.55",
      fontWeight: "400",
      letterSpacing: "-0.01em",
      background: isUser ? "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" : "#fff",
      color: isUser ? "#fff" : "#1e293b",
      boxShadow: isUser ? "0 4px 14px rgba(15,23,42,0.25)" : "0 1px 4px rgba(15,23,42,0.08)",
      border: isUser ? "none" : "1px solid #f1f5f9",
    });

    wrap.appendChild(bubble);
    messageArea.appendChild(wrap);
    messageArea.scrollTop = messageArea.scrollHeight;
  }

  sendBtn.onclick = async () => {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";

    /* typing indicator */
    const typing = document.createElement("div");
    typing.style.cssText = "display:flex;align-items:center;gap:6px;padding:0 2px;margin-bottom:6px;";
    typing.innerHTML = `
      <div style="width:22px;height:22px;border-radius:7px;background:linear-gradient(135deg,#0f172a,#1e3a5f);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z" fill="rgba(255,255,255,0.95)"/></svg>
      </div>
      <div style="background:#fff;border:1px solid #f1f5f9;border-radius:4px 16px 16px 16px;padding:10px 14px;display:flex;gap:5px;align-items:center;box-shadow:0 1px 4px rgba(15,23,42,0.08);">
        <span class="_typing-dot" style="width:6px;height:6px;border-radius:50%;background:#94a3b8;display:inline-block;"></span>
        <span class="_typing-dot" style="width:6px;height:6px;border-radius:50%;background:#94a3b8;display:inline-block;"></span>
        <span class="_typing-dot" style="width:6px;height:6px;border-radius:50%;background:#94a3b8;display:inline-block;"></span>
      </div>
    `;
    messageArea.appendChild(typing);
    messageArea.scrollTop = messageArea.scrollHeight;

    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ownerId,
          message: text,
        }),
      });
      const data = await response.json();
      messageArea.removeChild(typing);
      addMessage(data || "Sorry, I didn't understand that.", "ai");
    } catch (error) {
      console.error("Error communicating with chat API:", error);
      messageArea.removeChild(typing);
      addMessage("Sorry, I'm having trouble right now. Please try again later.", "ai");
    }
  };

  /* enter key support */
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendBtn.onclick();
  });

})(); //immediately invoked function
