import { useState } from "react"
import Button from "../components/ui/Button";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState<string>("Login");


  const onSubmitHandler = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState !== "Login" && (
        <input
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
        />
      )}

      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="email" placeholder="Email" />
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="password" placeholder="Password" />

      <div className="w-full flex justify-between text-sm -mt-2">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login"
          ? <p onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer">
            Create account</p>
          : <p onClick={() => setCurrentState("Login")}
            className="cursor-pointer">
            Login Hero</p>
        }
      </div>
      <Button type="submit">{currentState === "Login" ? "Sign In" : "Sign Up"}</Button>
    </form>
  )
}

export default LoginPage