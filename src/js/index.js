//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

const mainBoxStyles = {
	display: "flex",
	fontSize: "50px",
	color: "whitesmoke",
	background: "#101010",
	border: "1px solid 070707",
	borderRadius: "2px",
	margin: "auto",
	padding: "5px",
	width: "25%",
};

const secBoxStyles = {
	border: "1px solid 0e0e0e",
	borderRadius: "2px",
	background: "0e0e0e",
	padding: "2px",
};

function SimpleCounter(props) {
	console.log(props.secOne);
	return (
		<div className="mainBox justify-content-baseline" style={mainBoxStyles}>
			<div className="clockIcon" style={secBoxStyles}>
				<i className="far fa-clock"></i>
			</div>
			<div className="secBoxSix" style={secBoxStyles}>
				{props.secSix}
			</div>
			<div className="secBoxFive" style={secBoxStyles}>
				{props.secFive}
			</div>
			<div className="secBoxFour" style={secBoxStyles}>
				{props.secFour}
			</div>
			<div className="secBoxThree" style={secBoxStyles}>
				{props.secThree}
			</div>
			<div className="secBoxTwo % 10" style={secBoxStyles}>
				{props.secTwo}
			</div>
			<div className="secBoxOne % 10" style={secBoxStyles}>
				{props.secOne}
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	secOne: PropTypes.number,
	secTwo: PropTypes.number,
	secThree: PropTypes.number,
	secFour: PropTypes.number,
	secFive: PropTypes.number,
	secSix: PropTypes.number,
};

let counterSecOne = 0;
let counterSecTwo = 0;
let counterSecThree = 0;
let counterSecFour = 0;
let counterSecFive = 0;
let counterSecSix = 0;

setInterval(() => {
	counterSecOne++;
	if (counterSecOne >= 9) {
		counterSecOne = 0;
		counterSecTwo++;
		if (counterSecTwo >= 9) {
			counterSecTwo = 0;
			counterSecThree++;
			if (counterSecThree >= 9) {
				counterSecThree = 0;
				counterSecFour++;
				if (counterSecFour >= 9) {
					counterSecFour = 0;
					counterSecFive++;
					if (counterSecFive >= 9) {
						counterSecFive = 0;
						counterSecSix++;
					}
				}
			}
		}
	}

	ReactDOM.render(
		<SimpleCounter
			secSix={counterSecSix}
			secFive={counterSecFive}
			secFour={counterSecFour}
			secThree={counterSecThree}
			secTwo={counterSecTwo}
			secOne={counterSecOne}
		/>,
		document.querySelector("#app")
	);
}, 1);
