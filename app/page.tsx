export default function Home() {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px',
          height: 'fit-content',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Contact Us</h2>
        <form action="/submit-your-handler" method="POST" encType="multipart/form-data">
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="name"
              style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold' }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="email"
              style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold' }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              style={{
                width: '100%',
                padding: '.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="attachment"
              style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold' }}
            >
              Upload File
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              style={{
                width: '100%',
                padding: '.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="message"
              style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold' }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="How can we help?"
              style={{
                width: '100%',
                padding: '.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '.75rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '1rem',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
