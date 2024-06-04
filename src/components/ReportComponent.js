import { useContext } from "react";
import DataContext from "../Data/datacontext";
import "./ReportComponent.css"

const ReportContext = () => {
    const {income,expense} = useContext(DataContext)
    
    const FormatNumber = (number) => {
        const format = {
          style: 'decimal',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        };
        return number.toLocaleString('en-US', format);
      }

    return (
        <div>
            <h4>net balance:</h4>
            <h1 style={{textAlign: "center"}}>฿ {FormatNumber(income-expense)}</h1>
            <div className="report-container">
                <div>
                        <h4>total income</h4>
                        <p className="report netIncome">{FormatNumber(income)}</p>
                </div>
                <div>
                        <h4>total expense</h4>
                        <p className="report netExpense">{FormatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportContext