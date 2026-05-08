export default function Page() {
  return (
    <div style={{fontFamily:"'Segoe UI',sans-serif",display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"40px 20px",backgroundColor:"#f0f4f8",minHeight:"100vh"}}>
      <div style={{background:"white",padding:"2.5rem",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0,0,0,0.12)",width:"100%",maxWidth:"480px"}}>
        <h2 style={{marginTop:0,marginBottom:"1.5rem",color:"#1a1a2e",fontSize:"1.8rem"}}>Contact Us</h2>
        <form action="/submit" method="POST">
          <div style={{marginBottom:"1.2rem"}}>
            <label style={{display:"block",marginBottom:".4rem",fontWeight:"600",color:"#444",fontSize:"0.9rem"}}>Full Name</label>
            <input type="text" name="name" required placeholder="John Doe" style={{width:"100%",padding:".7rem 1rem",border:"1.5px solid #ddd",borderRadius:"8px",fontSize:"1rem",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:"1.2rem"}}>
            <label style={{display:"block",marginBottom:".4rem",fontWeight:"600",color:"#444",fontSize:"0.9rem"}}>Email Address</label>
            <input type="email" name="email" required placeholder="john@example.com" style={{width:"100%",padding:".7rem 1rem",border:"1.5px solid #ddd",borderRadius:"8px",fontSize:"1rem",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:"1.2rem"}}>
            <label style={{display:"block",marginBottom:".4rem",fontWeight:"600",color:"#444",fontSize:"0.9rem"}}>Phone Number</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210" style={{width:"100%",padding:".7rem 1rem",border:"1.5px solid #ddd",borderRadius:"8px",fontSize:"1rem",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:"1.2rem"}}>
            <label style={{display:"block",marginBottom:".4rem",fontWeight:"600",color:"#444",fontSize:"0.9rem"}}>Upload File</label>
            <input type="file" name="attachment" style={{width:"100%",padding:".7rem 1rem",border:"1.5px solid #ddd",borderRadius:"8px",fontSize:"1rem",boxSizing:"border-box",backgroundColor:"#fafafa"}} />
          </div>
          <div style={{marginBottom:"1.5rem"}}>
            <label style={{display:"block",marginBottom:".4rem",fontWeight:"600",color:"#444",fontSize:"0.9rem"}}>Message</label>
            <textarea name="message" rows="4" placeholder="How can we help?" style={{width:"100%",padding:".7rem 1rem",border:"1.5px solid #ddd",borderRadius:"8px",fontSize:"1rem",boxSizing:"border-box",resize:"vertical"}}></textarea>
          </div>
          <button type="submit" style={{backgroundColor:"#0052cc",color:"white",border:"none",padding:".85rem 1rem",borderRadius:"8px",cursor:"pointer",width:"100%",fontSize:"1rem",fontWeight:"700"}}>Submit</button>
        </form>
      </div>
    </div>
  )
}
