import React from "react";

export default function Employees(props){

    const { employees=[] } = props;
	const listItems = employees.map((e) =>
	  <li key={e} >{e} </li>
	);

	return(
	<div>
		<ul>{listItems}</ul>
	</div>
	);
}