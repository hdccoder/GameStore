const pg = require('pg')
const client = new pg.Client('postgres://localhost/gamestore')

const express = require('express')
const app = express()

app.get('/api/videogames', async (req, res , next) => {
 try {
    const SQL = `
        SELECT *
        FROM videogames
    `
    const response = await client.query(SQL)
    console.log(response.rows)
    res.send(response.rows)

} catch (error) {
    next(error)
 }
})


const start = async () => {
    await client.connect()
    console.log('connected to database')
    const SQL = `
    DROP TABLE IF EXISTS videogames;
    DROP TABLE IF EXISTS boardgames;

    CREATE TABLE boardgames(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        players VARCHAR(100),
        age VARCHAR(100),
        price INT,
        playingtime VARCHAR(100),
        img VARCHAR (800)
    );
    INSERT INTO boardgames (name, players, age, price, playingtime, img) VALUES ('BLOOD ON THE CLOCKTOWER', '5-20', '15+', 145, '30-120 minutes', 'https://cdn.vox-cdn.com/thumbor/jbmfJ6paj-mv4epvewMlAhGEbHU=/0x0:1237x1244/300x300/filters:focal(619x622:620x623):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25143220/clocktower.JPG');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('FROSTHAVEN', '1-4', '14+', 250, '30-120 minutes', 'https://cdn.vox-cdn.com/thumbor/GTH4ZOgND7SCJu0htVccQrVSgJc=/0x0:1500x1338/300x300/filters:focal(750x669:751x670):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24704842/81huEJXkxfL._AC_SL1500_.jpg');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('JOHN COMPANY: SECOND EDITION', '1-6', '13+', 120, '90-240 minutes', 'https://wehrlegig.com/cdn/shop/files/JohnCompanySEProduct-1square_1024x1024@2x.jpg?v=1689951624');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('HEGEMONY: LEAD YOUR CLASS TO VICTORY', '2-4', '14+', 95, '150-240 minutes','https://cdn.vox-cdn.com/thumbor/U_T-cmVNgtydHODuxOeCUl71CXE=/0x0:1234x1500/300x400/filters:focal(617x750:618x751):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25123700/hegemony.jpg');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('DAYBREAK', '1-4', '10+', 60, '60-120 minutes','https://cdn.vox-cdn.com/thumbor/PTvaW0Wi8HVes7Fr8NCaDuIZKYA=/0x0:1500x1500/300x300/filters:focal(750x750:751x751):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25053655/Daybreak_square.png');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('MY ISLAND', '2-4', '10+', 40, '30 minutes','https://cdn.vox-cdn.com/thumbor/tmL29eVtTD1mOCE_RToyVlgIZy8=/0x0:889x786/300x300/filters:focal(445x393:446x394):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25118595/my_island.png');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('WARHAMMER 40,000', '2', '12+', 55, '120-240 minutes','https://cdn.vox-cdn.com/thumbor/yEh1Wpb33o7m8GUtvoU-Up3evwg=/0x0:918x948/300x300/filters:focal(459x474:460x475):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25118619/GWH40kIntroductoryStarterSet2.jpg');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('WINGSPAN', '1-5', '10+', 45, '40-70 minutes','https://cdn.vox-cdn.com/thumbor/UXbyuiS-oFoaQGPKne-vy4BLb60=/0x0:2040x1360/300x300/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19814122/wingspan.jpg');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('FOREST SHUFFLE', '2-5', '10+', 30, '40-60 minutes','https://cdn.vox-cdn.com/thumbor/aXHcoPDKvavS8le8PMdEoTrXUFE=/0x0:840x1324/300x400/filters:focal(420x662:421x663):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25118640/forest_shuffle.jpg');
    INSERT INTO boardgames (name, players, age,  price, playingtime, img) VALUES ('FORGOTTEN WATERS', '3-7', '14+', 45, '120-240 minutes','https://cdn.vox-cdn.com/thumbor/orUEXpBQLnFCXCvxxQ4mrEIF8bg=/0x0:964x1132/300x300/filters:focal(482x566:483x567):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22493355/forgotten_waters.jpg');

    CREATE TABLE videogames(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200),
        year INT,
        publisher VARCHAR(200),
        platform VARCHAR(200),
        rating INT,
        img VARCHAR(800)
);
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('The Legend of Zelda: Tears of the Kingdom', 2023, 'NINTENDO OF AMERICA', 'Nintendo Switch', 5,'https://www.rollingstone.com/wp-content/uploads/2023/12/01_Tears-of-the-Kingdom.jpg?w=1280');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Baldur’s Gate 3', 2023, 'LARIAN STUDIOS', 'Xbox Series X|S, PlayStation 5, PC, macOS', 5,'https://www.rollingstone.com/wp-content/uploads/2023/12/02_Baldurs-Gate-3.jpg?w=1280');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Alan Wake II', 2023, 'EPIC GAMES','Xbox Series X|S, PlayStation 5, PC', 5, 'https://www.rollingstone.com/wp-content/uploads/2023/12/03_Alan-Wake-2.jpg?w=1280');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Final Fantasy XVI', 2023, 'SQUARE ENIX','PlayStation 5', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IYbMXZrFHn5Qwv6GM-uLwsflBL8lEHEtXh_CquPz9CpLhknLGrU0Cp7fn1G0Jz7JQJw&usqp=CAU');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Super Mario Wonder’', 2023, 'NINTENDO OF AMERICA','Nintendo Switch', 5, 'https://www.rollingstone.com/wp-content/uploads/2023/12/05_Super-Mario-Wonder.jpg?w=1280');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Street Fighter 6’', 2023, 'CAPCOM USA','Xbox Series X|S, PlayStation 4 & 5, PC', 5, 'https://www.rollingstone.com/wp-content/uploads/2023/12/06_Street-Fighter-6.jpg?w=1280');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Marvel’s Spider-Man 2', 2023, 'SONY INTERACTIVE ENTERTAINMENT', 'PlayStation 5', 4,'https://assets-prd.ignimgs.com/2021/09/09/screenshot-43-1631220042144.jpg?width=1080');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Sea of Stars', 2023, 'SABOTAGE STUDIO', 'Xbox One & Series X|S, PlayStation 4 & 5, Nintendo Switch, PC', 4,'https://www.rollingstone.com/wp-content/uploads/2023/12/08_Sea-of-Stars.jpg?w=1280');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Resident Evil 4', 2023, 'CAPCOM USA', 'Xbox Series X|S, PlayStation 4 & 5, PC, macOS, iOS, iPadOS', 4,'https://www.rollingstone.com/wp-content/uploads/2023/12/09_Resident-Evil-4.jpg?w=1280');
    INSERT INTO videogames (name, year, publisher, platform, rating, img) VALUES ('Diablo IV', 2023, 'BLIZZARD ENTERTAINMENT', 'Xbox One & Series X|S, PlayStation 4 & 5, PC', 4,'https://www.rollingstone.com/wp-content/uploads/2023/12/10_Diablo-IV.jpg?w=1280');

    `
    await client.query(SQL)
    console.log('tables created and data seeded')

    const port = process.env.PORT || 3099;
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })


}

start()