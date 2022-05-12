import './TopDashboard.css'
import Service from '../services/Service'
import TextBlock from '../text-block/TextBlock'


function TopDashboard() {
    const booking = {
        teal: "BOOKING APP",
        button: "Search Flights",
        image: "https://images.unsplash.com/photo-1621632361333-4649f0b59adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGZsaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }

    const weather = {
        teal: "WEATHER APP",
        button: "Click for weather",
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }

    const news = {
        teal: "NEWS APP",
        button: "Access to news",
        image: "https://images.unsplash.com/photo-1585812876834-2f24ff0aa95d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxuZXdzcGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    }

    return (
        <div className="top-dashboard">
            <div className="block-dashboard">
                <Service data={booking}/>
                <TextBlock/>
            </div>
            <div className="block-dashboard">
                <Service data={weather}/>
            </div>
            <div className="block-dashboard">
                <Service data={news}/>
            </div>
        </div>
    )
}

export default TopDashboard
