const LoadingSpinner = () => {
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform">
      <div className="h-24 w-24 animate-spin  rounded-full border-8 border-solid border-[#FFD05B] border-t-transparent"></div>
    </div>
  )
}

export default LoadingSpinner
