<template>
    <div> 
        <div class="container-notice">
            <div class="text">
                <h3>Thank You</h3>
                <p>You've Successfully registered a link has been sent to your email account to <br> verify your Account</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Notice',
    data:()=>({
    })
}
</script>
<style scoped>
@font-face {
    font-family: Poppins-Bold;
    src: url('../assets/poppins/Poppins-Bold.ttf'); 
  }
.container-notice{
    width: 100%;  
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #9053c7;  
    /* background: -webkit-linear-gradient(-135deg, #f1d8f0, #c7cadb);
    background: -o-linear-gradient(-135deg, #b3b1b2, #fbfcff);
    background: -moz-linear-gradient(-135deg, #555555, #f7f8fd);
    background: linear-gradient(-135deg, #ebd6e9, #38393b); */
  }
  .text h3{
      font-family: Poppins-Regular;
      font-size: 27px;
      text-shadow: 2px 1px  white

  }
  p{
      color:white;
      text-align: center;
  }
</style>

