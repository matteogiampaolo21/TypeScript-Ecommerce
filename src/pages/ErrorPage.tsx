

function ErrorPage() {
  return (
    <div className='about-flex-container'>
      <h1 className='mb-5 gradient-bg btn-block text-center py-5'>Oops! Something went wrong.</h1>
      <div className='about-info rounded mt-5'>
        <h3 className='font-weight-bold'>Page not found.</h3>
        <p>The page you were looking for could not be found.</p>
        <a href="/">Return to home</a>
       </div>
    </div>
  )
}

export default ErrorPage