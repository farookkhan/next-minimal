import 'whatwg-fetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { PAYMENT_SERVER_URL, STRIPE_PUBLISHABLE } from '../constants';

const Checkout = (props) => {
  const {
    id,
  } = props;

  const onToken = (token) => {
    fetch(`${PAYMENT_SERVER_URL}/secure/${id}`, {
      method: 'POST',
      body: JSON.stringify(token),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => console.log('we are in business', data))
    .catch(err => console.log('we have an error:', err));
  };

  return (
    <StripeCheckout
      image={'https://s3.amazonaws.com/minimal-spaces/single-heart-icon_9_3_17.png'}
      name={'One Heart Source'}
      description={'Secure your position!'}
      amount={100}
      locale={'auto'}
      panelLabel={'Secure'}
      label={'Secure Your Position'}
      zipCode
      billingAddress
      allowRememberMe={false}
      token={onToken}
      stripeKey={STRIPE_PUBLISHABLE}
      style={{ width: 400, backgroundColor: 'red', background: 'yellow' }} />
  );
};

export default Checkout;
