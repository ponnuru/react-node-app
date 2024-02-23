//backend/server.js
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
//let dbConfig = require('./database/db');
const Excel = require('exceljs');

// Express Route
const studentRoute =
	require('../backend/routes/student.route')

// Configure mongoDB Database
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/reactdb')
// 	.then(() => {
// 		console.log('Database successfully connected!')
// 	},
// 		error => {
// 			console.log('Could not connect to database : ' + error)
// 		}
// 	)
    mongoose.connect('mongodb://localhost/student', {
    useNewUrlParser: true,
});

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());
app.get('/exportexcelfile', async (req, res) => {
    console.log("react to post action - loadFile");
    let workbook = new Excel.Workbook();
    const filePath = './data/sample.xlsx'
      try {
        return await workbook.xlsx.readFile(filePath)
        .then(function() {
            var worksheet = workbook.getWorksheet("Sheet1");
            worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
              console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
            });
        });

    }catch(error) {
        console.log('Xl Error', error);
    }
    
});
app.use('/students', studentRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port,
	() => {
		console.log('Connected to port ' + port)
	})

// 404 Error
app.use((req, res, next) => {
	res.status(404).send('Error 404!')
});


app.use(function (err, req, res, next) {
	console.error(err.message);
	if (!err.statusCode) err.statusCode = 500;
	res.status(err.statusCode)
		.send(err.message);
});
