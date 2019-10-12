import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRates } from "../actions";

const ExchangeRates = props => {
    useEffect(() => {
        console.log("Running useEffect...");
        console.log("currency1 Symbol: ", props.currency1.symbol);
        props.fetchRates(props.currency1.symbol);
    }, [props.currency1]);
    if (props.isFetching) {
        return <h2>Loading exchange rates...</h2>
    }

    console.log("Currency 1 in ExchangeRates:\n", props.currency1);
    return (
        <div className="exchange-rates">

            {props.error && <p>{props.error}</p>}
            <div className="exchange-rates">
                <h2>Base Currency</h2>
                <h3>{props.currency1.symbol}</h3>

                <h2>Second Currency</h2>
                <h3>{props.currency2.symbol}</h3>
                <span>{props.currency2.rate}</span>

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currency1: state.currency1,
    currency2: state.currency2,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { fetchRates }
)(ExchangeRates);