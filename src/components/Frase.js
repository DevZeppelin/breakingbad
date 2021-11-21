import React from "react";

const Frase = ({ frase }) => {

    //buena forma para ver si un objeto tiene algún valor
    if(Object.keys(frase).lenght === 0) return null

  return (
    <div className="contenedorFrase">
      <h2>{frase.quote}</h2>
      <p>- {frase.author}</p>
      <style jsx>{`
        .contenedorFrase {
          margin-top: 12rem;          
          align-items: bottom;
          padding: 12px;
          border-radius: 0.5rem;
          background-color: #fff;
          max-width: 800px;  
        }

        
        h2 {
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          position: relative;
          padding-left: 4rem;
        }

        h2::before {
          content: open-quote;
          font-size: 10rem;
          color: black;
          position: absolute;
          left: -1rem;
          top: -2rem;
        }

        p {
            margin-top: 2rem;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 1.4rem;
            font-weight: bold;
            text-align: right;
            color: #666;

        }
        
      `}</style>
    </div>
  );
};

export default Frase;
