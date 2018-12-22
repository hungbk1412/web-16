const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const RootRouter = require("./routers");

mongoose.connect(
	"mongodb://localhost/techkids-hotgirl",
	{ useNewUrlParser: true },
	(err) => {
		if(err) console.log(err)
		else console.log("DB connect success!");
	});

const app = express();

app.use(session({
	secret : "hellohowareyou",
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: false,
		httpOnly: false,
		maxAge: 7*24*60*60*1000
	}
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use((req, res, next) => {
	console.log(req.sessionID);
	next();
})

app.use("/", RootRouter);
app.use(express.static("view"));

const UserModel = require("./models/user")

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/view/login.html");
});

app.post("/login", (req, res) => {
	const { username, password } = req.body;
	if (username && password) {
		UserModel.findOne({ username }, function(err, userFound) {
			if (err) res.status(500).json( { success: 0, message: err })
			else if (!userFound || !userFound._id) res.status(400).json({ success: 0, message: "Not found!" })
			else {
				if (bcrypt.compareSync(password, userFound.password)) {
					const { username, email, _id, role } = userFound;
					req.session.userInfo = { username, email, _id, role };
					res.json({ success: 1, message: "Login successfully!" })
				} else res.status(401).json( { success: 0, message: "Wrong pass!" })
			}
		})
	}
})
// app.get("/", (req, res) => {
// 	res.send("Techkids hot-girl server");
// });
app.get("/logout", (req, res) => {
	req.session.destroy();
	res.json({ success: 1, message: "Logout successfully!" })
})

const port = process.env.PORT || 6969;
app.listen(port, (err) => {
	if(err) console.log(err)
	else console.log("Server start success!");
});