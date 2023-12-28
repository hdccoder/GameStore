const pg = require('pg')
const client = new pg.Client('postgres://localhost/gamestore')

const start = async () => {
    await client.connect()
    console.log('connected to database')
    const SQL = `
    DROP TABLE IF EXISTS videogames;
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
}

start()