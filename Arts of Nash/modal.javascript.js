var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

 