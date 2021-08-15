import { useContext } from "react"
import { DataContext } from "../App"

const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1>แบบทดสอบก่อนเรียน</h1>
            <button onClick={()=>setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
        </div>
    )
}

export default Menu