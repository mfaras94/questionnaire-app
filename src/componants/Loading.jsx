import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
   <div className="flex justify-center items-center fixed bg-white z-50 w-full h-full">
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#2563eb"
    />
  </div> 
  
  )
}

export default Loading