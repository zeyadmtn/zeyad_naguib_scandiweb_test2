import ContentWrapper from "Component/ContentWrapper";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import "./CheckoutComponent.style.scss";

export class CheckoutComponent extends SourceCheckout {

  renderProgressBar() {
    const currentStep = this.props.checkoutStep;
    return (
      <div className="Checkout-progress-bar-wrapper">
        <div className={"Checkout-progress-bar-line1-" + currentStep}></div>
        <div>
          <span class={"Checkout-progress-bar-milestone-text-m1-" + currentStep}>Shipping</span>
          <div className={"Checkout-first-milestone-arrow-" + currentStep}>1</div>
        </div>


        <div className={"Checkout-progress-bar-line2-" + currentStep}></div>
        <div>
          <span className={"Checkout-progress-bar-milestone-text-m2-" + currentStep}>Review & Payment</span>
          <div className={"Checkout-second-milestone-arrow-" + currentStep}>2</div>
        </div>
        <div className={"Checkout-progress-bar-line3-" + currentStep}></div>
      </div>
    );
  }

  render() {
    return (
      <main block="Checkout">
        {this.renderProgressBar()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default CheckoutComponent;
