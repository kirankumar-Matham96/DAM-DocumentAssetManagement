const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Welcome to DAM: Digital Asset Manager');
});



const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running at port number ${PORT}`);
});
