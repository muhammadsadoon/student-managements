import type { AlertBoxType as Props } from "../../utils/types/propes"

const AlertBox = ({ text, role }: Props) => {
    
    return (
        <div className={"z-9999 absolute bottom-10 right-10 p-3 bg-white text-nowrap rounded-md border " +
            `${role == "Done" ? "text-green-700 border-green-700" : role == "Error" ? "text-red-500 border-red-500" : role == "info" ? "text-sky-500 border-sky-500" : ""}`}>
            <p>{text}</p>
        </div>
    )
}

export default AlertBox
