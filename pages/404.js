export default function Custom404() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
    <div className="circle rounded-full border-ppink border-solid w-80 h-80 mx-auto mt-16">
      <div className="bar h-6 bg-white">
        <div className="triangle border-solid w-0 h-0"></div>
        <div className="triangle2 border-solid w-0 h-0"></div>
      </div>
    </div>
    <div className="errorCode">404</div>
    <div className="errorSentence">not found</div>
    </>
  )
}