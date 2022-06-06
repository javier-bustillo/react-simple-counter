//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include bootstrap npm library into the bundle
// import "bootstrap";

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
			<div className="secBoxTwo" style={secBoxStyles}>
				{props.secTwo}
			</div>
			<div className="secBoxOne" style={secBoxStyles}>
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

let counter = 0;

setInterval(() => {
	const sec6 = Math.floor(counter / 1000000);
	const sec5 = Math.floor(counter / 100000);
	const sec4 = Math.floor(counter / 10000);
	const sec3 = Math.floor(counter / 1000);
	const sec2 = Math.floor(counter / 100);
	const sec1 = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<SimpleCounter
			secSix={sec6}
			secFive={sec5}
			secFour={sec4}
			secThree={sec3}
			secTwo={sec2}
			secOne={sec1}
		/>,
		document.querySelector("#app")
	);
}, 1000);
