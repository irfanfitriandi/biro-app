interface ILoading {
  loadingPage: boolean
}

const LoadingSpinner = ({ loadingPage }: ILoading) => {
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform">
      <div
        className={`${loadingPage ? 'h-24 w-24 border-8' : 'h-10 w-10 border-4'} animate-spin rounded-full border-solid border-[#FFD05B] border-t-transparent`}
      ></div>
    </div>
  )
}

export default LoadingSpinner
