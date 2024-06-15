// Right.js
import React from 'react';

const Right = (da) => {
    return (
        <div className="component">
            <h2>Component 1</h2>
            <p>This is the content of the first component.</p>
            <p> {da.d}</p>
            <table>
      <thead>
      <tr>
          <th>product name </th>
          <th>discribtion </th>
          <th> count </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>product name </td> 
          <td>product discbtion </td>
        
          <td><input type="number" /></td>              
        </tr>
       
      </tbody>
    </table>
        </div>
    );
};

export default Right;
