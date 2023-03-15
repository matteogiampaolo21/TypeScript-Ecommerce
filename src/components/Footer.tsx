import "../styles/Footer.css"

function Footer() {
    return (
      <footer>
          <h3 className='mt-5'>Charon</h3>
          
          <div className='footer-flex-container'>
              <div className='footer-flex-items mt-4'>
                <a href="/">Home</a>
                <a href="/products"> Products</a>
                <a href="/about">About Us</a>
              </div>
              <div className='my-5'>
                <p className='copyright'> © 2023 Charon, Inc </p>
              </div>
          </div>
      </footer>
      
    )
}
  
export default Footer