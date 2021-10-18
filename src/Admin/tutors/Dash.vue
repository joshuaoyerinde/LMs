<template>
  <div id="app">
    <section>
      <h1>Lorem Ipsum Dolor Sit Amet</h1>
      <div class="formcontainer">
        <hr />
      <div class="container">
        <label for="uname">
          <strong>Full Name</strong>
        </label>
        <input v-model="full_name"  class="form-control"  type="text" placeholder="John Doe" />
        <label for="email">
          <strong>Email Address</strong>
        </label>
        <input v-model="email" class="form-control"  required type="text" placeholder="customer@email.com" name="email" />
        <label for="amount">
          <strong>Amount</strong>
        </label>
            <input v-model="amount"  class="form-control"  type="tel" placeholder="1000" name="amount" required />
        </div>
      </div>
    </section>
    <paystack
        :amount="amount * 100"
        :email="email"
        :paystackkey="PUBLIC_KEY"
        :reference="reference"
        :callback="processPayment"
        :close="close"
        class="btn btn-primary"
    >
    Make Payment ${{amount}}
    </paystack>
    <!-- <img style="max-width:200px;" alt="Vue logo" src="./assets/pstk.png" /> -->
  </div>
</template>
<script>
import paystack from 'vue-paystack'
export default {
    name: "App",
   
    data: () => {
        return {
            amount: 0,
            full_name: '',
            email: '',
            reference:'',
            PUBLIC_KEY:'pk_test_5e72e62644d8e95d662f685ccceae48bc345bd61'
        };
    },
    components: {
        paystack
    },
    computed: {
    reference() {
        let text = "";
        let possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
            // console.log(text);
        }
    },
  methods: {
    processPayment: (res) => {
      window.alert("Payment recieved")
      console.log(res)
    },
    close: () => {
     console.log("You closed checkout page")
    }
  },
};
</script>

