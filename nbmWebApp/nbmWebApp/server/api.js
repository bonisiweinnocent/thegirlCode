

module.exports = (app, db) => {

    app.get('/api/test', function (req, res) {
        res.json({
            name: 'joe'
        });
    });

    app.post("/api/stories", async (req, res) => {
        const { user_message } = req.body
        try {
            const story = await db.one(`insert into messages(user_message) values($1) returning user_message`, [user_message]);

            console.log(story);
            res.status(200).json({
                data: story
                // message: "You have shared"
            });
        } catch (error) {
            console.log(error)

        }
    })

    app.get("/api/the_stories", async (req, res) => {

        try {
            const story = await db.any(`select * from messages`);
            console.log(story);
            res.status(200).json({
                story: story
                // message: "You have shared"
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "empty content"
            })
        }
    })

    app.post("/api/motivation", async (req, res) => {
        const { motivation_message } = req.body
        try {
            const motivation = await db.one(`insert into motivation(motivation_message) values($1) returning user_message`, [motivation_message]);

            console.log(motivation);
            res.status(200).json({
                data: motivation
                // message: "You have shared"
            });
        } catch (error) {
            console.log(error)

        }
    })

    app.get("/api/the_motivation", async (req, res) => {

        try {
            const motivation = await db.any(`select * from motivation`);
            console.log(motivation);
            res.status(200).json({
                story: motivation
                // message: "You have shared"
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "empty content"
            })
        }
    })

    app.post("/api/signup", async (req, res) => {

        try {

            console.log(req.body, 'SIGNUP');


            const { firstname,
                lastname,
                username,
                passauth,
                proffesion,
                practiceNo,
                email,
                contact } = req.body

            // *********
            let user = await db.oneOrNone(`select * from proffesionals where username =$1`, [username]);
            console.log({ inside: user });

            if (user) {
                res.status(400).json({
                    "errors": [
                        {
                            "msg": "This user already exists",

                        }
                    ]
                })

            } else {

                await db.none(`insert into proffesionals( firstname,
                   lastname,
                   username,
                   passauth,
                    proffesion,
                    practiceNo,
                  email,
                    contact) values ($1,$2, $3, $4,$5,$6,$7,$8)`, [firstname,
                    lastname,
                    username,
                    passauth,
                    proffesion,
                    practiceNo,
                    email,
                    contact]);

                res.json({
                    "msg": "New user created!"
                })
            }
        } catch (error) {
            console.log(error);
            res.json({
                error: error.message
            })
        }


    })

    app.post("/api/logIn", async (req, res) => {
        try {
            const { username, password } = req.body;
           

            const findUser = await db.oneOrNone(
                `SELECT * FROM proffesionals WHERE username = $1`,
                [username]
            );

            if (!findUser) {
                
                throw Error(`The user does not exists`);


            }
         
         
            res.status(200).json({
                message: "You are loged in",
              
                user: findUser,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    });

    



}