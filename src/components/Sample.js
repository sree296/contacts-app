import './sample.css';
export const Prints = () => (
  <div id='test'>
    
  {/* Start: PDF Content*/}  
 <div className="wrapper">
        {/* Finance Dealer Disclosure */}
   <section className="m-b-30">
      <div className="row disclosure font-sm">
          <div className="left cl-60 txt-left">
              <p>
              Finance Dealer Disclosure | LeaseStar Administrators - kruthika
              </p>
          </div>
          <div className="right cl-40 txt-right">
                <p>
                Friday, April 30, 2021 6:51:43 AM
                </p>
          </div>
      </div>
      <h4 className="section-heading">
      FINANCE DEALER DISCLOSURE
      </h4>
   </section>
   

    {/* User and Vehicle Info */}
  <section className="m-b-10">
      <p>
      Customer State: New Jersey    Customer County: ATLANTIC     Deal Type: FINANCE
      </p>
      <p>
      MSRP: 42,000.00     Invoice: 0.00
      </p>
      <p>
      Finance Program: BMW College Grad,Sales Support,Flat Fee Paid,New Vehicle Program,Non-Floor Plan,Market 41-South Chicago Region
      </p>
      <h4 className="section-heading">
      Vehicle: New 2020  BMW 3 SERIES 203O 4dr Sdn 330i  w/AC ,  Automatic , Odom: 0 
      </h4>
  </section>

   <div className="row">

     {/* Left Column */}
     <div className="cl-50 p-rt-15">

          {/* Payment Information */}
          <section>
            <h4 className="section-heading">Payment Information</h4>
              <div className="row">
                  <p className="cl-70 font-bold">Total COD</p>
                  <p className="cl-30 txt-right font-bold">0.00</p>
              </div>
            <div className="row m-b-10">
                <p className="cl-70 font-bold">Monthly Payment</p>
                <p className="cl-30 txt-right font-bold">12345</p>
              </div>
              <div className="row">
                  <p className="cl-70">Term:</p>
                  <p className="cl-30 txt-right">60</p>
              </div>
            <div className="row">
                <p className="cl-70">Annual Percentage Rate (APR):</p>
                <p className="cl-30 txt-right">0.90%</p>
              </div>
              <div className="row">
                  <p className="cl-70">Days to 1st Payment:</p>
                  <p className="cl-30 txt-right">36</p>
              </div>
            <div className="row">
                <p className="cl-70">Balloon Payment:</p>
                <p className="cl-30 txt-right">0.00</p>
              </div>
          </section>

          {/* Profit Information */}
          <section>
            <h4 className="section-heading">Profit Information</h4>
              <div className="row">
                  <p className="cl-70">Vehicle Cost:</p>
                  <p className="cl-30 txt-right">40,000.00</p>
              </div>
            <div className="row">
                <p className="cl-70">Vehicle Profit:</p>
                <p className="cl-30 txt-right">2,000.00</p>
              </div>
              <div className="row m-b-20">
                <p className="cl-70">Dealer Installed Options:</p>
                <p className="cl-30 txt-right">695.00</p>
              </div>
              <div className="row">
                <p className="cl-30">&nbsp;</p>
                <p className="cl-70 txt-right">
                  <span className="font-bold p-rt-15">Total Profit:</span>
                  <span className="font-bold border-top">2,695.00</span>
                </p>
              </div>
          </section>
     </div>

    {/* Right Column */}
     <div className="cl-50 p-lt-15">

       {/* Price Breakdown */}
        <section>
          <h4 className="section-heading">Price Breakdown</h4>
            <div className="row">
                <p className="cl-70">Vehicle Cost:</p>
                <p className="cl-30 txt-right">40,000.00</p>
            </div>
          <div className="row">
              <p className="cl-70">Vehicle Profit:</p>
              <p className="cl-30 txt-right">2,000.00</p>
            </div>
            <div className="row m-b-20">
              <p className="cl-70">Dealer Installed Options:</p>
              <p className="cl-30 txt-right">695.00</p>
            </div>
            <div className="row">
              <p className="cl-30">&nbsp;</p>
              <p className="cl-70 txt-right">
                <span className="font-bold p-rt-15">Total Cash Price:</span>
                <span className="border-top">42,695.00</span>
              </p>
            </div>
        </section>

        {/* Down Payment Breakdown */}
        <section>
          <h4 className="section-heading">Down Payment Breakdown</h4>
            <div className="row">
                <p className="cl-70">Cash Down Payment:</p>
                <p className="cl-30 txt-right">0.00</p>
            </div>
          <div className="row m-b-20">
              <p className="cl-70">Customer Rebates:</p>
              <p className="cl-30 txt-right">0.00</p>
            </div>
            <div className="row m-b-10">
              <p className="cl-30">&nbsp;</p>
              <p className="cl-70 txt-right">
                <span className="font-bold p-rt-15">Total Down Payment:</span>
                <span className="border-top">0.00</span>
              </p>
            </div>
            <div className="row">
              <p className="cl-30">&nbsp;</p>
              <p className="cl-70 txt-right font-sm">
                <span className="font-bold p-rt-15">Sales Subtotal:</span>
                <span>42695.00</span>
              </p>
            </div>
        </section>

     </div>

    </div>
  
 </div>
{/* End: PDF Content*/}  


</div>
);
  