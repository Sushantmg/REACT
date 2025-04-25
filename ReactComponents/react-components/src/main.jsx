import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Table from './components/table.jsx'

const data = [
  { name: 'John', roll: 1, class: 'A' },
  { name: 'Jane', roll: 2, class: 'B' },
 
];

const tableRows= data.map((item) => {
return(
  <tr>
  <td>{item.name}</td>
  <td>{item.roll}</td>
  <td>{item.class}</td>
</tr>
);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
 <Table data={tableRows}>
  
  
 </Table>
    
  </StrictMode>,
)
