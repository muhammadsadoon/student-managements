import { useState } from 'react'
import type { AlertBoxType } from '../../../utils/types/propes'
import { Link, useNavigate } from "react-router-dom"
import AlertBox from "../../../components/alert-box/alert-box"
import { supabase } from '../../../utils/supabase-client'
const SignUpScreen = () => {
  const [showMassage, setShowMassage] = useState<AlertBoxType>({
    text: "",
    role: "Done",
  });
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let temp = 0;
  const navigate = useNavigate();

  const handleSubmitForm = async () => {
    try {
      if (name.trim().length != 0 && email.trim().length != 0 && password.trim().length != 0) {
        if (name.length > 9) {
          if (email.slice(email.indexOf("@"), email.indexOf(".") + 2)) {
            if (password.length >= 8) {
              const [filturStrAsNumber, filturStrAsString] = [password.split("").some((el) => typeof Number(el) == 'number'), password.split("").some((el) => typeof el == 'string')];
              if (filturStrAsNumber) {
                if (filturStrAsString) {
                  const { error } = await supabase.auth.signUp({
                    email: email,
                    password: password
                  });
                  if (error) {
                    setShowMassage({
                      text: error.message,
                      role: "Error"
                    });
                    setTimeout(() => {
                      setShowMassage({
                        text: "",
                        role: "Done",
                      })
                    }, 2000);
                  } else {
                    setShowMassage({
                      text: "Data added sueccesfully",
                      role: "Done"
                    });
                    setTimeout(() => {
                      setShowMassage({
                        text: "",
                        role: "Done",
                      })
                      navigate("/login");
                    }, 2000);
                  }
                } else {
                  throw "please enter the number in your password!";
                }
              } else {
                throw "please enter the number in your password!";
              }
            } else {
              throw "your password lenght is less than 8 character!";
            }
          } else {
            throw "pleas enter the valid email addreas!";
          }
        } else {
          throw "please enter the full name!";
        }
      } else {
        throw "please fill all input fields!"
      }
    } catch (err: any) {
      clearTimeout(temp);
      setShowMassage({
        text: err,
        role: "Error"
      })

      temp = setTimeout(() => {
        setShowMassage({
          text: "",
          role: "Done"
        })
      }, 2000)
    }
  }


  return (
    <div className="min-h-dvh w-full flex items-center justify-center flex-col gap-4" style={{
      background: "#08201D"
    }}>
      <div>

      </div>
      <h1 className="text-4xl text-white text-center">Welcome, create your school account </h1>
      <div className="min-h-[60vh] min-w-[280px] bg-white w-1/3 rounded-md shadow p-3 flex flex-col items-center justify-center gap-3">
        <p className="text-center">It is our great pleasure to <br /> have you on board! </p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="h-[50px] border border-xl w-10/12 p-3 rounded-md" placeholder="Enter Full Name" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="h-[50px] border border-xl w-10/12 p-3 rounded-md" placeholder="Enter your Email Id" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-[50px] border border-xl w-10/12 p-3 rounded-md" placeholder="Enter your Password" />
        <button onClick={handleSubmitForm} className="bg-sky-600 p-2 px-5 text-white rounded-md shadow-sm cursor-pointer">Connect Now</button>
        <p>Already have an account <Link className="text-sky-600 font-bold" to={"/login"}>Login In</Link></p>
      </div>
      {
        showMassage.text && (<AlertBox
          text={showMassage.text}
          role="Error"
        />)
      }
    </div>
  )
}

export default SignUpScreen
