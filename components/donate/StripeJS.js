import { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import 'whatwg-fetch';
import { FadingCircle } from 'better-react-spinkit';

class StripeJS extends Component {
  constructor() {
    super();

    this.state = {
      success: false,
      customerDetails: {
        name: '',
        phone: '',
        email: '',
        amount: undefined,
        address: '',
        addressTwo: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
      },
      valid: {
        name: true,
        phone: true,
        email: true,
        amount: true,
        address: true,
        city: true,
        state: true,
        country: true,
        zipcode: true,
      },
      showDonationSpinner: false,
    };

    this.stripe;

    const style = {
      base: {
        iconColor: 'rgb(250,95,91)',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontSize: '15px',

        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    };

    this.onLoadSuccess = () => {
      this.stripe = Stripe('pk_live_ViDmnAdk2mjsZIrs538EBilJ');

      const elements = this.stripe.elements();
      this.card = elements.create('card', { style });
      this.card.mount('#card-element');

      this.card.addEventListener('charge', (event) => {
        this.setOutcome(event);
      });
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setOutcome = this.setOutcome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.clearDonationForm = this.clearDonationForm.bind(this);
    this.showDonationModal = this.showDonationModal.bind(this);
    this.hideDonationModal = this.hideDonationModal.bind(this);
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.onLoadSuccess();
    }
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.onLoadSuccess();
      } else {
        console.log('Stripe module load error.');
      }
    }
  }

  setOutcome(result) {
    const errorElement = document.querySelector('.error');
    errorElement.classList.remove('visible');

    if (result.token) {
      const customerDetails = this.state.customerDetails;
      const payload = JSON.stringify({ customerDetails, token: result.token.id });
      this.clearDonationForm();

      fetch('https://midnight-prophet-api.herokuapp.com/donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        this.hideDonationModal();
        throw new Error(res.statusText);
      })
      .then(() => {
        this.handleSuccess();
        this.card.clear();
      })
      .catch((error) => {
        console.log(error);
      });
    } else if (result.error) {
      errorElement.textContent = result.error.message;
      errorElement.classList.add('visible');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formIsValid = this.validateForm();

    if (formIsValid) {
      this.showDonationModal();
      this.stripe.createToken(this.card).then(this.setOutcome);
    }
  }

  validateForm() {
    let isValid = true;
    const formInputs = Object.keys(this.state.valid);
    const validated = {
      name: true,
      phone: true,
      email: true,
      amount: true,
      address: true,
      city: true,
      state: true,
      country: true,
      zipcode: true,
    };

    formInputs.forEach((input) => {
      if (this.state.customerDetails[input]) {
        validated[input] = true;
      } else {
        validated[input] = false;
        isValid = false;
      }
    });

    if (isNaN(this.state.customerDetails.amount)) {
      console.log('validate form - true');
      validated.amount = false;
      isValid = false;
    } else {
      validated.amount = true;
    }

    this.setState({ valid: validated });
    return isValid;
  }

  handleChange(event) {
    const update = {};
    update[event.target.name] = event.target.value;
    this.setState({ customerDetails: Object.assign({}, this.state.customerDetails, update) });
  }

  handleSuccess() {
    this.hideDonationModal();
    this.setState({ success: true });
  }

  handleDismiss() {
    this.setState({ success: false });
  }

  showDonationModal() {
    this.setState({ showDonationSpinner: true });
  }

  hideDonationModal() {
    this.setState({ showDonationSpinner: false });
  }

  clearDonationForm() {
    const customerDetails = {
      name: '',
      phone: '',
      email: '',
      amount: '',
      address: '',
      addressTwo: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
    };

    this.setState({ customerDetails });
  }

  render() {    
    const { valid } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="group">
          <label>
            <span>Name</span>
            <input
              name="name"
              className="field"
              placeholder="Jane Doe"
              onChange={this.handleChange}
              value={this.state.customerDetails.name} />
          </label>
          <div className={valid.name ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Phone</span>
            <input
              name="phone"
              className="field"
              placeholder="(123) 456-7890"
              type="tel"
              onChange={this.handleChange}
              value={this.state.customerDetails.phone} />
          </label>
          <div className={valid.phone ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Email</span>
            <input
              name="email"
              className="field"
              placeholder="jane.doe@gmail.com"
              onChange={this.handleChange}
              value={this.state.customerDetails.email} />
          </label>
          <div className={valid.email ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Amount</span>
            <input
              name="amount"
              className="field"
              placeholder="$100.00 (USD)"
              onChange={this.handleChange}
              value={this.state.customerDetails.amount} />
          </label>
          <div className={valid.amount ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          </div>
          <div className="group">
          <label>
            <span>Address 1</span>
            <input
              name="address"
              className="field"
              placeholder="Street"
              onChange={this.handleChange}
              value={this.state.customerDetails.address} />
          </label>
          <div className={valid.address ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Address 2</span>
            <input
              name="addressTwo"
              className="field"
              placeholder="Apt, Suite (optional)"
              onChange={this.handleChange}
              value={this.state.customerDetails.addressTwo} />
          </label>
          <label>
            <span>City</span>
            <input
              name="city"
              className="field"
              placeholder="Los Angeles"
              onChange={this.handleChange}
              value={this.state.customerDetails.city} />
          </label>
          <div className={valid.city ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>State/Province</span>
            <input
              name="state"
              className="field"
              placeholder="California"
              onChange={this.handleChange}
              value={this.state.customerDetails.state} />
          </label>
          <div className={valid.state ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Country</span>
            <input
              name="country"
              className="field"
              placeholder="United States"
              onChange={this.handleChange}
              value={this.state.customerDetails.country} />
          </label>
          <div className={valid.country ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Zip/Postal</span>
            <input
              name="zipcode"
              className="field"
              placeholder="90001"
              onChange={this.handleChange}
              value={this.state.customerDetails.zipcode} />
          </label>
          <div className={valid.zipcode ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
        </div>
        <div className="group">
          <label>
            <span>Card</span>
            <div id="card-element" className="field"></div>
          </label>
        </div>
        <button type="submit">DONATE NOW</button>
        <div className="outcome">
          <div className="error" role="alert"></div>
          <div>
            <Message
              compact
              color="green"
              hidden={!this.state.success}
              onClick={this.handleDismiss} >Thanks for your support! </Message>
          </div>
        </div>
        {this.state.showDonationSpinner && (
          <div className="donation-loading-overlay">
            <div className="donation-loading-spinner">
              <p>Donation Processing...</p>
              <div className="fading-circle-container">
                <FadingCircle
                  size={50}
                  color={'white'} />
              </div>
            </div>
          </div>
        )}
        <style jsx>{`
          * {
              font-size: 15px;
              font-variant: normal;
              padding: 0;
              margin: 0;
            }

            html {
              height: 100%;
            }

            body {
              background: #E6EBF1;
              align-items: center;
              min-height: 100%;
              display: flex;
              width: 100%;
            }

            form {
              width: 480px;
              margin: 40px auto 200px auto;
            }

            .group {
              background: white;
              box-shadow: 0 7px 14px 0 rgba(49,49,93,0.10),
                          0 3px 6px 0 rgba(0,0,0,0.08);
              border-radius: 4px;
              margin-bottom: 20px;
            }

            label {
              position: relative;
              color: #8898AA;
              font-weight: 300;
              height: 40px;
              line-height: 40px;
              margin-left: 20px;
              display: block;
            }

            .group label:not(:last-child) {
              border-bottom: 1px solid #F0F5FA;
            }

            label > span {
              width: 20%;
              text-align: right;
              float: left;
            }

            .field {
              background: transparent;
              font-weight: 300;
              border: 0;
              color: #31325F;
              outline: none;
              padding-right: 10px;
              padding-left: 10px;
              cursor: text;
              width: 70%;
              height: 40px;
              float: right;
            }

            .field::-webkit-input-placeholder { color: #CFD7E0; }
            .field::-moz-placeholder { color: #CFD7E0; }
            .field:-ms-input-placeholder { color: #CFD7E0; }

            button {
              float: left;
              display: block;
              background: rgb(250,95,91);
              color: white;
              box-shadow: 0 7px 14px 0 rgba(49,49,93,0.10),
                          0 3px 6px 0 rgba(0,0,0,0.08);
              border-radius: 4px;
              border: 0;
              margin-top: 20px;
              font-size: 15px;
              font-weight: 400;
              width: 100%;
              height: 40px;
              line-height: 38px;
              outline: none;
            }

            button:focus {
              background: rgb(250,95,91);
            }

            button:active {
              background: rgb(250,95,91);
            }

            .outcome {
              float: left;
              width: 100%;
              padding-top: 8px;
              min-height: 24px;
              text-align: center;
            }

            .success, .error {
              display: none;
              font-size: 13px;
            }

            .success.visible, .error.visible {
              display: inline;
            }

            .error {
              color: #E4584C;
            }

            .success {
              color: rgb(250,95,91);
            }

            .success .token {
              font-weight: 500;
              font-size: 13px;
            }

            .invalid-msg {
              text-align: center;
              color: red;
              font-size: 12px;
            }

            .invalid-hidden {
              display: none;
            }

            .donation-loading-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh
              background-color: rgba(0,0,0,.7);
            }

            .donation-loading-spinner {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              color: white;
              text-align: center;
            }

            .donation-loading-spinner > p {
              font-size: 22px;
              font-weight: 200;
              margin-bottom: 10px;
            }

            .fading-circle-container {
              width:50%;
              position: relative;
              left: 50%;
              transform: translateX(-25px);
            }

            @media (max-width: 768px) {
              form {
                width: 100%;
              }

              .group span {
                display: none;
              }

              label {
              margin-left: 0;
              }

              label > input {
                width: 100%;
                padding-left: 20px;
              }

              #card-element {
                width: 100%;
                padding-left: 20px;
              }
            }
        `}</style>
      </form>
    );
  }
}

StripeJS.propTypes = {
  isScriptLoaded: PropTypes.bool.isRequired,
  isScriptLoadSucceed: PropTypes.bool.isRequired,
};

export default scriptLoader('https://js.stripe.com/v3/')(StripeJS);
