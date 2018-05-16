var argv = process.argv;
var sum = 0;
for (x = 2; x < argv.length; x++)
{
	sum += +argv[x];
}
console.log(sum);
