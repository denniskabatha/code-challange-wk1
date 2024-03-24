//event listener
document.getElementById("salaryform1").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateSalary();
})

function calculateSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);

    const taxBands = [
        { amount: 24000, rate: 0.1},
        { amount: 288000, rate: 0.25},
        { amount: 8333, rate: 0.3},
        { amount: 100000, rate: 0.325},
        { amount: 467667, rate: 0.35},
        { amount: 5600000, rate: 0.35},
        { amount: Infinity, rate: 0.35}
    ];


    const nhifRates = [
        { min:0, max: 5999, deduction: 150},
        { min:6000, max: 7999, deduction: 150},
        { min:8000, max: 11999, deduction: 150},
        { min:12000, max: 14999, deduction: 150},
        { min:15000, max: 19999, deduction: 150},
        { min:20000, max: 24999, deduction: 150},
        { min:25000, max: 29999, deduction: 150},
        { min:30000, max: 34999, deduction: 150},
        { min:35000, max: 39999, deduction: 150}
    ]

    if (taxableIncome >= rate.min && taxableIncome <= rate.max) {
        nhifDeductions = rate.deductions;
         
    }
    const nssfTierIContribution = Math.min(basicSalary, 7000) *nssfTierIRates;
   const nssfTierIIConribution = Math.min(basicSalary, nssfTierIILimit) * nssfTierIIMax
   nssContribution = nssfTierIContribution + nssfTierIIConribution;



   
}
const grossSalary = basicSalary + benefits;
   const netSalary = grossSalary - tax - nhifDeduction - nssfContribution;
      const resultElement = document.getElementById("result");
      resultElement.innerHTML= `
      <p><strong>Gross Salary:</strong> Ksh ${grossSalary.toFixed(2)}</p>
      <p><strong>Tax:</strong> Ksh ${tax.toFixed(2)}</p>
      <p><strong>NHIF Deduvtion:</strong> Ksh ${nhifDeduction.toFixed(2)}</p>
      <p><strong>NSSF Contribution:</strong> Ksh ${nssfContribution.toFixed(2)}</p>
      <p><strong>Net Salary:</strong> Ksh ${netSalary.toFixed(2)}</p>`


   