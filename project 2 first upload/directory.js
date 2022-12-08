const { createApp, ref } = Vue

const App = {
  setup() {
    let searchText = ref('')
    const list = [
      'orange',
      'red',
      'blue',
      'black',
      'white',
      'orange',
      'red',
      'blue',
      'black',
      'white'
    ]
    
    function filteredList() {
      return list.filter(data => data.toLowerCase().includes(searchText.value.toLowerCase()))
    }
    
    return {searchText, filteredList}
  }
}

Vue.createApp(App).mount('#app')