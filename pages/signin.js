import SignInWithEmail from "../components/SignInWithEmail";

export default function SignIn() {
    return (
      <div className="container px-8 py-12 h-screen bg-gray-100 mx-auto">
        <div>
            <div className="flex justify-center m-4">
                <p>Sign In</p>
            </div>
        </div>
            <SignInWithEmail />
        
      </div>
    )
  }