
import Navigation from '../../Shared/Navigation/Navigation';
import Payment from '../Payment/Payment';
import './../CheckOut.css';

const CheckOut = () => {


  return (
    <div className="checkout-section">
      <Navigation />
      <div className="container">
        <div className="row">

          <div className="col-md-6 offset-md-1">
            <h4 className="text-center py-3">
              Submit This Form for Add Service
            </h4>
            <div className="card p-4">
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
