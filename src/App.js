import Transection from "./components/Transection";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useEffect, useState } from "react";
import DataContext from "./Data/datacontext";
import ReportContext from "./components/ReportComponent"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const design = {color:`red`, textAlign:`center`};
  const [items, setItems] = useState([])


  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    //add newItem firstly to set newItem at the top of list
    setItems( (previousItems) => [newItem,...previousItems] )
  }

  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(items => items > 0).reduce((a,b) => a+b, 0)
    setReportIncome(income)
    const expense = amounts.filter(items => items < 0).reduce((a,b) => a+b, 0)
    setReportExpense(expense)
  },[items,reportIncome, reportExpense])


  return (
    <DataContext.Provider value = {
      {
        income: reportIncome,
        expense: Math.abs(reportExpense)
      }
    }>
      <div className='containner'>
          <h1 style={design}>Incomes/Expenses Rocord</h1>
          <div>
            <Router>
                <ul className="horizontal-menu">
                  <li>
                    <Link to="/">Report</Link>
                  </li>
                  <li>
                    <Link to="/insert">Form</Link>
                  </li>
                </ul>
                <Routes>
                    <Route 
                      path="/" 
                      element={<ReportContext/>}
                      exact
                    />
                    <Route 
                      path="/insert"
                      element={(
                        <div>
                          <FormComponent onAddItem = {onAddNewItem}/>
                          <Transection items = {items}/>
                        </div>
                    )}
                    />
                </Routes>
            </Router>
          </div>
       </div>
    </DataContext.Provider>
      );
}

export default App;
