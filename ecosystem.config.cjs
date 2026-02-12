module.exports={
  apps:[{
    name:"stingator",
    cwd:"/mnt/stingator",
    script:"server.js",
    env:{
      NODE_ENV: "production",
      PORT:8079,

      // Reverse proxy / Cloudflare Tunnel
      TRUST_PROXY:"1",

      // Cookie sesiune
      SESSION_COOKIE:"hfn_session",
      SESSION_DAYS:"30",
      COOKIE_SECURE:"1",
      COOKIE_SAMESITE:"Strict",

      // Chei (schimbă cu valori lungi, random)
      PSI_API_KEY:"",
      BOT_API_KEY:"",

      // Admin
      PSI_ADMIN_PHONE:"",

      // WhatsApp BOT (dacă îl folosești)
      BOT_URL:"http://10.7.0.7:3003/send",
      BOT_TIMEOUT:"15000",

      // DB
      DB_HOST:"127.0.0.1",
      DB_USER:"root",
      DB_PASS:"",
      DB_NAME:"evidenta_psi",

      // OTP
      OTP_RATE_SECONDS:"60"
    }
  }]
};
