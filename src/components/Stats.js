import React from 'react';
import _ from 'lodash';

export const Stats = (props) => {
	const totalPlayers = props.players.length;
	let totalPoints = _.sumBy(props.players, 'score');
	// props.players.forEach(item => {totalPoints += item.score});

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalPoints}</td>
			</tr>
			</tbody>
		</table>
	)
}