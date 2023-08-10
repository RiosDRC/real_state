import company1 from '../assets/black-logo-1.png'
import company2 from '../assets/black-logo-2.png'
import company3 from '../assets/black-logo-3.png'
import company4 from '../assets/black-logo-4.png'
import company5 from '../assets/black-logo-5.png'
import company6 from '../assets/black-logo-6.png'
import company7 from '../assets/black-logo-7.png'
import agent1 from '../assets/agent_1.jpg'
import agent2 from '../assets/agent_2.jpg'
import agent3 from '../assets/agent_3.jpg'
import agent4 from '../assets/agent_4.jpg'
import agent5 from '../assets/agent_5.jpg'
import agent6 from '../assets/agent_6.jpg'
import agent7 from '../assets/agent_7.jpg'
import agent8 from '../assets/agent_8.jpg'
import agent9 from '../assets/agent_9.jpeg'


const properties = [
    {
        city: 'Paris',
        Number: 10,
        imgUrl: 'https://uploads.prod01.london.platform-os.com/instances/831/assets/parisskyscraper3.jpeg?updated=1626357083'
    },
    {
        city: 'New York',
        Number: 40,
        imgUrl: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        city: 'Los Angeles',
        Number: 34,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/LA_Skyline.jpg/300px-LA_Skyline.jpg'
    },
    {
        city: 'Chicago',
        Number: 20,
        imgUrl: 'https://media.istockphoto.com/id/1162898563/photo/chicago-urban-skyscrapers-usa.jpg?s=612x612&w=0&k=20&c=dtg1V8AntB6iepq6RYAhL9We-qRqLg40FWjoe7bjMtk='
    },
    {
        city: 'Verona',
        Number: 60,
        imgUrl: 'https://italianrealestatelawyers.com/wp-content/uploads/2020/07/Senza-titolo.png'
    },
    {
        city: 'Tokio',
        Number: 56,
        imgUrl: 'https://www.ledgerinsights.com/wp-content/uploads/2019/10/real-estate-ginza-tokyo.jpg'
    },
    {
        city: 'Pekin',
        Number: 60,
        imgUrl: 'https://www.e-architect.com/images/jpgs/beijing/china_world_trade_center_beijing_f070612_2.jpg'
    },
]

const forRent = [
    {
        imgUrl: "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/e0/fd/c5.jpg",
        price: 250,
        desc: "Lorem ipsum dolor sit"
    },
    {
        imgUrl: "https://images.squarespace-cdn.com/content/v1/589a3e1a414fb58b9eca1eed/1509554562462-9BTDGYJ1O036BQVUJKO8/unnamed.jpg",
        price: 550,
        desc: "Lorem ipsum dolor sit"
    },
    {
        imgUrl: "https://www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Modern-Apartment-Decor-.jpg",
        price: 350,
        desc: "Lorem ipsum dolor sit"
    },
    {
        imgUrl: "https://images1.apartments.com/i2/rGHpOj_frx32cghw2xC9ncYZr9HmkHL2mUYit2MntDU/111/the-helena-new-york-ny-building-photo.jpg",
        price: 2500,
        desc: "Lorem ipsum dolor sit"
    },
    {
        imgUrl: "https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_xl/10641ad61da1e5bc54cd710f0f8ffd04",
        price: 1450,
        desc: "Lorem ipsum dolor sit"
    },
    {
        imgUrl: "https://www.sobha.com/wp-content/uploads/2021/10/SOBHA-Arbor-Elevation-Mobile-o.webp",
        price: 150,
        desc: "Lorem ipsum dolor sit"
    },
]

const companies = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7
]

const agents = [
    {
        imgUrl: agent1,
        name: 'Nick Larson'
    },
    {
        imgUrl: agent2,
        name: 'Stella Hudson'
    },
    {
        imgUrl: agent3,
        name: 'Nina Perry'
    },
    {
        imgUrl: agent4,
        name: 'Ralf Johnson'
    },
    {
        imgUrl: agent5,
        name: 'Inga Howard'
    },
    {
        imgUrl: agent6,
        name: 'Albert Florence'
    },
    {
        imgUrl: agent7,
        name: 'Lada Silva'
    },
    {
        imgUrl: agent8,
        name: 'Pitter Scavo'
    },
    {
        imgUrl: agent9,
        name: 'Tina Ramos'
    }
]

export { properties, forRent, companies, agents }