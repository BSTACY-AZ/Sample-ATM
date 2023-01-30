# Sample-ATM
A very basic sample ATM application allowing a user to enter a deposit or withdrawal amount, submit the request, and have the updated balance reflect on screen. This was completed as a part of Module 15 of the Professional Certificate in Coding - MERN course through MIT xPro. 

The following improvements were made to this application above and beyond the requirements outlined in the learning module: 

1) I leave the Submit button enabled if the amount that the user enters for a withdrawal is greater than the current balance. If the user attempts to withdraw more than the current balance they are presented with an alert and the withdrawal is not completed. 

2) The module used the term "Cash Back" rather than "Withdrawal". I modified the code throughout to use the term "Withdrawal" to align more consistently with actual ATM verbiage. 

3) When the user selects an option from the select box, the UI updates dynamically based on the option selected to ask them what amount they wish to "Deposit" or "Withdraw". 

4) I added className's where needed within the .jsx and a class within the index.html to provide center alignment for the various rendered elements. 

TODO: I have been unable to properly center the select control after numerous attempts. I intend to dig in to identify why in the coming days. 




