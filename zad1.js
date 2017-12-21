/*
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else if (instruction === '/ver') {
            console.log(process.env);
        } else if (instruction === '/kupa') {
            console.log('Siku');
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});
*/
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case ('/exit'):
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case ('/ver'):
                console.log(process.env);
                break;
            case ('/działa?'):
                console.log('działa!');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});