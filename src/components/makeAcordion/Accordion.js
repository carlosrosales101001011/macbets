import React from 'react'
import { useState } from 'react';
// const App = React.createClass({
	
//   render () {
//   	let data = [
//     	{
//         title: "One", 
//         content: `Lorem ipsum dolor sit amet, 
//                   consectetur adipiscing elit, 
//                   sed do eiusmod tempor incididunt 
//                   ut labore et dolore magna aliqua. 
//                   Ut enim ad minim veniam, quis 
//                   nostrud exercitation ullamco laboris 
//                   nisi ut aliquip ex ea commodo consequat. 
//                   Duis aute irure dolor in reprehenderit 
//                   in voluptate velit esse cillum dolore 
//                   eu fugiat nulla pariatur. Excepteur 
//                   sint occaecat cupidatat non proident, 
//                   sunt in culpa qui officia deserunt 
//                   mollit anim id est laborum.`
//       }, {
//         title: "Two", 
//         content: `Lorem ipsum dolor sit amet, 
//                   consectetur adipiscing elit, 
//                   sed do eiusmod tempor incididunt 
//                   ut labore et dolore magna aliqua. 
//                   Ut enim ad minim veniam, quis 
//                   nostrud exercitation ullamco laboris 
//                   nisi ut aliquip ex ea commodo consequat. 
//                   Duis aute irure dolor in reprehenderit 
//                   in voluptate velit esse cillum dolore 
//                   eu fugiat nulla pariatur. Excepteur 
//                   sint occaecat cupidatat non proident, 
//                   sunt in culpa qui officia deserunt 
//                   mollit anim id est laborum.`
//       },{
//         title: "Three", 
//         content: `Lorem ipsum dolor sit amet, 
//                   consectetur adipiscing elit, 
//                   sed do eiusmod tempor incididunt 
//                   ut labore et dolore magna aliqua. 
//                   Ut enim ad minim veniam, quis 
//                   nostrud exercitation ullamco laboris 
//                   nisi ut aliquip ex ea commodo consequat. 
//                   Duis aute irure dolor in reprehenderit 
//                   in voluptate velit esse cillum dolore 
//                   eu fugiat nulla pariatur. Excepteur 
//                   sint occaecat cupidatat non proident, 
//                   sunt in culpa qui officia deserunt 
//                   mollit anim id est laborum.`
//       }
//     ];
    
//   	return (
//     	<Accordion data={data} />
//     );
//   }
// });

// export const Accordion = ({data})=>{
//     let accordion = [];
    
//     data.forEach((i) => {
//       accordion.push({
//         title: i.title,
//         content: i.content,
//         open: false
//       });
//     });
//     const [state, setState] = useState({accordionItems: accordion})
//     state.accordionItems.map(state=> {
//       console.log(state.open?'estan abiertos': 'estan cerrados');
//     })

//   function click(i) {
//     const newAccordion = state.accordionItems.slice();
//     const index = newAccordion.indexOf(i);

//     newAccordion[index].open = !newAccordion[index].open;
//     setState({ accordionItems: newAccordion });
//   }

//   const sections = state.accordionItems.map((i) => (
//     <div key={state.accordionItems.indexOf(i)}>
//       <div className="title" onClick={click.bind(null, i)}>
//         <div className="arrow-wrapper">
//           <div
//             className={
//               i.open ? "angle-down rotate-180" : "angle-down"
//             }
//           ></div>
//         </div>
//         <span className="title-text">{i.title}</span>
//       </div>
//       <div className={i.open ? "content content-open" : "content"}>
//         {state.accordionItems.map(state=> state.open) && (<div
//           className={
//             i.open  ? "content-text content-text-open" : "content-text"
//           }
//         >
//           {" "}
//           {i.content}
//         </div>)}
//       </div>
//     </div>
//   ));
//     return <div className="accordion">{sections}</div>;
// };


export const Accordion = ({data})=>{

}