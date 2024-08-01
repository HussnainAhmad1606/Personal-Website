import React from 'react';

const logos = [
  { src: "https://camo.githubusercontent.com/5e59af5a72f09da56c98b7fd5ef5c0682000e04e108feb74b3d41099e68c0722/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f332f33382f48544d4c355f42616467652e7376672f36303070782d48544d4c355f42616467652e7376672e706e67", alt: "HTML Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", alt: "CSS3 Logo",  maxWidth: '70px', maxHeight: '70px' },

  { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg", alt: "TypeScript Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", alt: "Python Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png", alt: "React Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1920px-Nextjs-logo.svg.png", alt: "NextJS Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", alt: "Git Logo",  maxWidth: '70px', maxHeight: '70px' },

  { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB Logo",  maxWidth: '140px', maxHeight: '140px' },
  
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg", alt: "Firebase Logo",  maxWidth: '120px', maxHeight: '120px' },
  


  { src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", alt: "VSCode Logo",  maxWidth: '70px', maxHeight: '70px' },
 
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", alt: "PostgreSQL Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg", alt: "MySQL Logo",  maxWidth: '70px', maxHeight: '70px' },
  
  { src: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg", alt: "Redis Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1280px-SQLite370.svg.png", alt: "SQLite Logo",  maxWidth: '70px', maxHeight: '70px' },

  { src: "https://camo.githubusercontent.com/4fd113a0e279ff2e1408411d1cd467d55d9b09ae9d13fc0f07d21fece319c61b/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6e6f64656a732f6e6f64656a732d617232312e737667", alt: "NodeJS Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", alt: "ExpressJS Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://camo.githubusercontent.com/03711ef31ea99a84b6d3e796dea694841c7852b5c3a6febbfa89357cc7960021/68747470733a2f2f7777772e646a616e676f70726f6a6563742e636f6d2f6d2f696d672f6c6f676f732f646a616e676f2d6c6f676f2d6e656761746976652e706e67", alt: "Django Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://camo.githubusercontent.com/78d4e8db28bf9657972280d96c197dc91ff3ccf6ea9bfe66a78014f1f28f2d49/68747470733a2f2f627574746572636d732e636f6d2f7374617469632f696d616765732f746563685f62616e6e6572732f466c61736b2e706e67", alt: "Flask Logo",  maxWidth: '70px', maxHeight: '70px' },
  { src: "https://camo.githubusercontent.com/4d7dc1b9532af3dd03bf729ea46ef261ae270f4d7fad451f001c66cf3482d2b6/68747470733a2f2f646f776e6c6f61642e6c6f676f2e77696e652f6c6f676f2f4d6963726f736f66745f417a7572652f4d6963726f736f66745f417a7572652d4c6f676f2e77696e652e706e67", alt: "Azure Logo",  maxWidth: '70px', maxHeight: '70px' }
];

const TechLogosTable = () => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {Array.from({ length: 4 }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {logos.slice(rowIndex * 5, (rowIndex + 1) * 5).map((logo, index) => (
              <td key={index} style={{ border: '1px solid #ddd', textAlign: 'center', verticalAlign: 'middle', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                  <img src={logo.src} alt={logo.alt} style={{ maxWidth: logo.maxWidth, maxHeight: logo.maxHeight, objectFit: 'contain' }} />
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TechLogosTable;
