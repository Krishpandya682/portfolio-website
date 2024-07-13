import "bootstrap/dist/css/bootstrap.min.css";
import { sections } from "./skill_list";
import * as React from "react";
import "./skills.scss";
import Marquee from "react-fast-marquee";

export default function Skills() {
  // Example data array

  return (
    <div id = "skills" className="container skills">
      {sections.map((section, index) => (
        <div className="h-10 marq" key={index}>
         {/* <div className="title">{section.title}</div> */}
          <Marquee
            loop={0}
            speed={50}
            pauseOnClick={true}
            gradient={true}
            gradientWidth={100}
            direction={index % 2 === 0 ? "left" : "right"} // Alternating direction
          >
            {section.items.map((item, idx) => (
              <div key={idx} className="bg shadow-lg p-3 mb-5 bg-white rounded">
                <img src={item.url} className="icon" />
                {item.name}
              </div>
            ))}
          </Marquee>
        </div>
      ))}
    </div>
  );
  /*
        <div className="skills">
            <div className="title"><h1>Skills</h1></div>

            https://www.youtube.com/watch?v=D2Wen5aa7BA
            <CRow>
                {returnRow([["Programming Languages"]])}
            </CRow>
            <CRow>
                {returnRow([["Programming Languages","Isha","Seema","Jayesg"],[python,4,5,6],[7,8,9],[10,11,12]])}
            </CRow>
            <CRow>
                {returnRow([[],[]])}
            </CRow>
                {/* <h2>Programming Languages</h2>
                    <ul>    
                        <li><img src = "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" className="icon"/>Python</li>
                        <li><img src = "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" className="icon"/>C</li>
                        <li><img src = "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" className="icon"/>C++</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/java/java-icon.svg" className="icon"/>Java</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" className="icon"/>JavaScript</li>
                        <li><img src = "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" className="icon"/>SQL</li>
                        <li><img src = "https://www.svgrepo.com/download/465934/processor.svg" className="icon"/>Assembly Language</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/php/php-icon.svg" className="icon"/>PHP</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg" className="icon"/>R</li>
                        <li><img src = "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" className="icon"/>MATLAB</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg" className="icon"/>Ruby</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg" className="icon"/>Rust</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" className="icon"/>TypeScript</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" className="icon"/>Dart</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/ocaml/ocaml-icon.svg" className="icon"/>OCaml</li>
                        <li><img src = "https://cdn.cdnlogo.com/logos/c/27/c.svg" className="icon"/>C#</li>
                        <li><img src = "https://cdn.cdnlogo.com/logos/s/73/solidity.svg" className="icon"/>Solidity</li>
                    </ul>
                <h2>Operating Systems</h2>
                    <ul>
                        <li><img src = "https://www.svgrepo.com/download/448239/microsoft.svg" className="icon"/>Microsoft Windows</li>
                        <li><img src = "https://www.svgrepo.com/download/473705/macos.svg" className="icon"/>MacOS</li>
                        <li><img src = "https://www.svgrepo.com/download/354004/linux-tux.svg" className="icon"/>Linux</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/android/android-official.svg" className="icon"/>Android</li>
                    </ul>
                <h2>Servers and load balancing</h2>
                    <ul>
                        <li><img src = "https://www.svgrepo.com/download/354575/xampp.svg" className="icon"/>XAMPP</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/ibm_cloud/ibm_cloud-icon.svg" className="icon"/>IBM Cloud</li>

                    </ul>
                <h2>Data storage and querying </h2>
                    <ul>
                        <li><img src = "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" className="icon"/>MySQL</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" className="icon"/>SQLite</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" className="icon"/>PostgreSQL</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" className="icon"/>MongoDB</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" className="icon"/>Apache Spark</li>
                    </ul>
                <h2>Backend Frameworks</h2>
                    <ul>
                        <li><img src = "https://www.svgrepo.com/download/330319/dot-net.svg" className="icon"/>ASP.NET</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" className="icon"/>Django</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" className="icon"/>Firebase</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" className="icon"/>Node.js</li>
                    </ul>
                <h2>Frontend Frameworks</h2>
                    <ul>
                        <li><img src = "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" className="icon"/>Bootstrap</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" className="icon"/>ReactJS</li>
                        <li><img src = "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" className="icon"/>Flutter</li>
                    </ul>
                <h2>Web3</h2>
                    <ul>
                        <li><img src = "https://www.vectorlogo.zone/logos/ethereum/ethereum-icon.svg" className="icon"/>Ethereum</li>
                        <li><img src = "https://web3js.org/static/media/truffle.188e1b93924334150df9.png" className="icon"/>Truffle</li>
                        <li><img src = "data:image/png;base64,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" className="icon"/>Web3.js</li>
                        <li><img src = "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" className="icon"/>Metamask</li>                   
                    </ul>
                    */
}
