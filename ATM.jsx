const Account = () => {
    const [transactionAmt, setDeposit] = React.useState(0);
    const [accountState, setAccountState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setATMMode] = React.useState(null);
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Current Balance: $ ${accountState} `;
    const handleChange = (event) => {
      console.log(`handleChange ${event.target.value}`);
      if (event.target.value > accountState && atmMode === "Withdrawal") {
          console.log('TODO: Disable Submit Button')
      } else {
          
      }
      setDeposit(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        let newBalance = 0;
        if (atmMode === "Withdrawal"){
            console.log('Process Withdrawal')
            if (accountState - transactionAmt < 0) {
                alert('You cannot withdraw more than the current account balance.');
                newBalance = accountState;
                event.preventDefault();
                return;
            } else {
                newBalance = accountState - transactionAmt;
                setAccountState(newBalance);
            }
        } else if (atmMode === "Deposit") {
            console.log('Process Deposit')
            newBalance = accountState + transactionAmt;
            setAccountState(newBalance);
        }
        else {
    
        }
    
        event.preventDefault();
        
      };

      const handleModeSelect = (event) => {
        console.log("account state: ", accountState)
        console.log("transaction amount: ", transactionAmt)
        let tranType = null;
    
        if (event.target.value === "Withdrawal") {
            console.log("DEBUG: Withdrawal Selected")
            tranType = "Withdrawal"
            setIsDeposit(false);
            setValidTransaction(true);
        }
        else if (event.target.value === "Deposit") {
            console.log("DEBUG: Deposit Selected")
            tranType = "Deposit"
            setIsDeposit(true);
            setValidTransaction(true);
            
        }
        else {
            console.log("DEBUG: No value selected")
            tranType = ""
            console.log('Hide Controls')
            setValidTransaction(false);
        }
     
        
        setATMMode(tranType);
        
        event.preventDefault();
    
      };
      
      return (
        <form onSubmit={handleSubmit}>
          <h2 id="total" className="d-flex justify-content-center">{status}</h2>
          <label className="d-flex justify-content-center">Select an action below to continue</label>
          <hr/>
            <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                <option id="no-selection" value=""></option>
                <option id="transactionAmt-selection" value="Deposit">Deposit</option>
                <option id="cashback-selection" value="Withdrawal">Withdrawal</option>
            </select>
        <br />
            {validTransaction && <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>}
        </form>
      );
    };


    const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
        const choice = ['Deposit', 'Withdrawal'];
        let displayTranType = "";

        if (!isDeposit){
            displayTranType = "withdraw"
        }
        else if (isDeposit){
            displayTranType = "deposit"
        }
        
        return (
          <label className="label-huge">
            <br />
            <h3> What amount would you like to {displayTranType}?</h3>
            <br />
            <input id="number-input" type="number" width="200" onChange={onChange}></input>
            <input type="submit" width="200" value="Submit" id="submit-input"></input>
          </label>
        );
      };

ReactDOM.render(<Account />, document.getElementById("root"));
