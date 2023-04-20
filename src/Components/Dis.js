import { useState } from "react";
 function Dis() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [arr, setArr] = useState("");
  const[value,setValue]=useState("")
  const handleSubmit = () => {
    let obj = {
      email: email,
      password: password
    };
    let arr1 = [];
    arr1.push(...arr, obj);
    let b = [...arr1];
    setArr(b);
    console.log(arr)
    setValue("")
  }
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button disabled={!arr} onClick={handleSubmit}>Subscribe</button>
    </div>
  );
}
export default Dis