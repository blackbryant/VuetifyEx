<template >
   <div>
   <v-main>

      <v-alert border="left"  colored-border color="deep-purple accent-4" elevation="2">
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

      Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
     </v-alert>

     <v-alert type="success">  </v-alert>

      <v-alert
      border="right"
      colored-border
      type="error"
      elevation="2"
    >
      Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.
    </v-alert>
    </v-main>
    </div>
</template>
<script>


export default {
    name:"AlertEx"
    
}
</script>
