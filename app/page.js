export default function Page() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form action="/submit" method="POST">
        <div>
          <label>Full Name</label><br/>
          <input type="text" name="name" required placeholder="John Doe" />
        </div>
        <br/>
        <div>
          <label>Email Address</label><br/>
          <input type="email" name="email" required placeholder="john@example.com" />
        </div>
        <br/>
        <div>
          <label>Message</label><br/>
          <textarea name="message" rows="4" placeholder="How can we help?"></textarea>
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
