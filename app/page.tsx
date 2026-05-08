export default function Page() {
  return (
    <div style={{fontFamily:"sans-serif",display:"flex",justifyContent:"center",padding:"20px",backgroundColor:"#f4f4f9",minHeight:"100vh"}}>
      <div style={{background:"white",padding:"2rem",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",width:"100%",maxWidth:"400px"}}>
        <h2>Contact Us</h2>
        <form action="/submit" method="POST">
          <div style={{marginBottom:"1rem"}}>
            <label style={{display:"block",marginBottom:".5rem",fontWeight:"bold"}}>Full Name</label>
            <input type="text" name="name" required placeholder="John Doe" style={{width:"100%",padding:".5rem",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:"1rem"}}>
            <label style={{display:"block",marginBottom:".5rem",fontWeight:"bold"}}>Email Address</label>
            <input type="email" name="email" required placeholder="john@example.com" style={{width:"100%",padding:".5rem",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:"1rem"}}>
            <label style={{display:"block",marginBottom:".5rem",fontWeight:"bold"}}>Message</label>
            <textarea name="message" rows="4" placeholder="How can we help?" style={{width:"100%",padding:".5rem",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}} />
          </div>
          <button type="submit" style={{backgroundColor:"#007bff",color:"white",border:"none",padding:".75rem 1rem",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"1rem"}}>Submit</button>
        </form>
      </div>
    </div>
  )
}
