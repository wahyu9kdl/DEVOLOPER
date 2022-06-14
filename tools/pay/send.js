<center><div id="paypal-button-container-P-0GU49296UP065262SMJOC6PY"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AeOdKtJbDLbt0CW5jVHQFk0UNnTxhqDnlsoPvdzzeEJQ8MF2YU6KjYxRSZGC_ft57oxQt-rDKn0_H4Fn&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'pill',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-0GU49296UP065262SMJOC6PY'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-0GU49296UP065262SMJOC6PY'); // Renders the PayPal button
</script></center>
