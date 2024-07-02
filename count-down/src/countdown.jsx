import "./App.css"

function Countdown({days,hours,minutes,seconds}){
    return(
        <>
        <h1>Welcome to 2025</h1>
        <div className="countdownstyle">
            <table className="mt-5">
                <thead>
                    <th className=" p-4   text-primary h1">{days}</th>
                    <th className=" p-4  text-primary h1">{hours}</th>
                    <th className=" p-4  text-primary h1">{minutes}</th>
                    <th className=" p-4   text-primary h1">{seconds}</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4">Days </td>
                        <td className="p-4">Hours </td>
                        <td className="p-4">Minutes </td>
                        <td className="p-4">Seconds </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Countdown