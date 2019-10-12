import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setCurrency1, setCurrency2 } from "../actions/";
import { isProperty } from "@babel/types";

const ExchangeForm = props => {
    const [curr1, setCurr1] = useState({ symbol: "", rate: 1 });
    const [curr2, setCurr2] = useState({ symbol: "", rate: 1 });

    const handleSelection = setter => e => {
        console.log("Selection: ", JSON.parse(e.target.value));
        setter(JSON.parse(e.target.value));
    };

    useEffect(() => {
        props.setCurrency1(curr1);
    }, [curr1]);

    useEffect(() => {
        props.setCurrency2(curr2);
    }, [curr2]);

    const optionsFactory = () => rates => {
        let options = [];
        for (let currency in rates) {
            options = [...options, (<option value={JSON.stringify({ symbol: currency, rate: rates[currency] })}>{currency}</option>)];
        }
        return options;
    }

    const options1 = optionsFactory();
    const options2 = optionsFactory();

    console.log("props.rates in ExchangeForm: ", props.rates);

    return (
        <div className="exchange-form">
            <select value={curr1} onChange={handleSelection(setCurr1)}>
                {options1(props.rates)}
            </select>
            <select value={curr2} onChange={handleSelection(setCurr2)}>
                {options2(props.rates)}
            </select>
        </div >
    );
}

const mapStateToProps = state => ({
    rates: state.rates,
    currency1: state.currency1,
    currency2: state.currency2
});

export default connect(
    mapStateToProps,
    { setCurrency1, setCurrency2 }
)(ExchangeForm);