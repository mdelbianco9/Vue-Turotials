var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var list = new Vue({
	el: '#mylist',
	data: {
		lists: [
			{ item: 'Vue is kinda confusing'},
			{ item: 'But I am slowly understanding it'},
			{ item: 'can I run these answers as a for loop?'}
		]
	}
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ''
  }
})


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

// Vue Instance
var obj = {
  foo: 'bar'
}
// This stops the dadta from being changed. End of the list/ line
Object.freeze(obj)

new Vue({
  el: '#app1',
  data () {
    return {
      obj
    }
  }
})


// Computed Properties (saves space, cluttering of functionality)
var vm = new Vue({
  el: '#example',
  data: {
    message: ''
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

new Vue({
  el: '#pBar',
  data: {
    progress: 0
  },
  methods: {
    start: function() {
      var vm = this;
      var width = 1;
     var increase = setInterval(function() {
        vm.progress += width;
        if(vm.progress >= 100) {
          clearInterval(increase);
          $('.progress-bar').css("background-color", "#75cf7b");
        }

      }, 50);
    }
  }
})

for(var i=0;i<5;i++){
  setTimeout(function(){console.log(i)},1)
}








