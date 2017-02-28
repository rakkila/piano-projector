
$.get('text.txt', function(data) {
    
   console.log(data)
    var fh = OpenTextFile("text.txt");
    fh.WriteLine('123' + ',' + '456');
   // fh.Close();
    console.log('JAAA');
}, 'text');

