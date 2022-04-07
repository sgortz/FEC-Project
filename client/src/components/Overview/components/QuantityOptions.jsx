import React from 'react';

export default function QuantityOptions({ quantityOption }) {
  if (quantityOption === null) {
    return (<option value="--">--</option>)
  } else {
    let count = [];

    for (var i = 1; i <= quantityOption; i++) {
      count.push(<option value={i} key={i}>{i}</option>)
    }
    return (<> { count } </>)
  }
}