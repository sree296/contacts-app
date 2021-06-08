import './App.css';
import React from "react";
import jsPDF from 'jspdf';
import "jspdf/dist/polyfills.es.js";
import "jspdf/dist/polyfills.umd.js";
//import { Font } from '@react-pdf/renderer';
import { renderToString } from "react-dom/server";
import {Prints} from "./components/Sample";




class App extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={taxvalue:20,
                      profitvlaue:30,
                     VehicleCost:40000,
                     vehicleprofit:2000,
                   options:695  }
    };

    componentDidMount(){



      const string = renderToString(<Prints />);
  const pdf = new jsPDF("p", "pt");

  pdf.html(string, {
   callback: function (pdf) {
      var blob = pdf.output("blob");
      window.open(URL.createObjectURL(blob),"_blank");
      
   },
   x: 30,
   y: 30
});
     
    }

    generatePDF = () => {
      var doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, 'This is the first title.')

      doc.addFont('helvetica', 'normal')
      doc.text(20, 60, 'This is the second title.')
      doc.text(20, 100, 'This is the thrid title.')  
      
      var string = doc.output('datauristring');
      var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
      var x = window.open();
      x.document.open();
      x.document.write(embed);
      x.document.close();

      
      //doc.save('demo.pdf')
//      let chckpdf= doc.output('datauristring');
      
//       var win = window.open();
//   win.document.open();
//   win.document.write(<Iframe src="http://www.youtube.com/embed/xDMP3i36naA"></Iframe>);
//   win.document.close();
      
    }   
    
   render() {
      return (
         <div>
            {/* {this.generatePDF} */}
            {/* <button onClick={this.generatePDF} type="primary">Download PDF</button>  */}
            <Prints />
         </div>
      );
   }
}


export default App;
