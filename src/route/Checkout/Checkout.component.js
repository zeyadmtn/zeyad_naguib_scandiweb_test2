import {Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'Component/ContentWrapper';
import './CheckoutComponent.style.scss';
export class CheckoutComponent extends SourceCheckout {


    renderProgressBar(){
        return (
            <div className='Checkout-progress-bar-wrapper'>
                <div className='Checkout-progress-bar-line1'></div>
                <div className='Checkout-first-milestone-arrow'>1</div>
                <div className='Checkout-progress-bar-line2'></div>
                <div className='Checkout-first-milestone-arrow'>2</div>
                <div className='Checkout-progress-bar-line3'></div>
            </div>
        )
    }

    render() {
        
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    
                
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
                
            </main>
        );
    }
}

export default CheckoutComponent;