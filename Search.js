import React, { useState } from 'react';
import './Search.css';

const articles = [
    {
        title: 'Manchester United clinch victory in a thrilling match against Chelsea',
        details: 'In an electrifying match at Old Trafford, Manchester United secured a 2-1 victory over Chelsea. The game was highlighted by a stunning late winner from Marcus Rashford, sending the fans into a frenzy. The match was a tactical battle, with both teams showcasing their strengths.',
        date: 'August 28, 2023'
    },
    {
        title: 'Tactical Analysis: Liverpool’s pressing game the key to their success',
        details: 'Liverpool’s relentless pressing and quick counter-attacks have been central to their success this season. Jurgen Klopp’s strategy of "gegenpressing" has seen Liverpool dominate possession and create numerous scoring opportunities, leading them to the top of the Premier League table.',
        date: 'May 15, 2022'
    },
    {
        title: 'The rise of Manchester City as a football powerhouse',
        details: 'Manchester City’s transformation into a football powerhouse is a story of strategic investments and visionary management. With Pep Guardiola at the helm, City has adopted a style of play that emphasizes ball control, fluid movement, and an aggressive attacking mindset.',
        date: 'November 9, 2021'
    },
    {
        title: 'Unforgettable moments in English Premier League history',
        details: 'The English Premier League has been home to some of the most unforgettable moments in football history. From Aguero’s last-minute title-winning goal for Manchester City to Leicester City’s miraculous title win in 2016, the league continues to captivate fans around the world.',
        date: 'March 3, 2020'
    },
    {
        title: 'The impact of foreign investment on English Premier League clubs',
        details: 'The influx of foreign investment has transformed the English Premier League, bringing in world-class talent and elevating the global profile of the league. While this has led to increased competitiveness, it has also sparked debates about the sustainability and fairness of such investments.',
        date: 'July 22, 2019'
    },
    {
        title: 'Arsenal set to rebuild with a focus on young talents',
        details: 'Arsenal is in the midst of a major rebuild, with a clear focus on nurturing young talent. Manager Mikel Arteta is at the forefront of this transition, promoting promising youngsters from the academy and investing in future stars, signaling a new era for the Gunners.',
        date: 'February 11, 2023'
    },
    {
        title: 'Tottenham Hotspur’s quest for a top-four finish',
        details: 'Tottenham Hotspur is on a quest to secure a top-four finish in the Premier League, a goal that has eluded them in recent seasons. With a blend of experienced players and emerging talent, Spurs are determined to return to the Champions League stage.',
        date: 'September 27, 2022'
    },
    {
        title: 'Leicester City’s fairy-tale Premier League title win remains inspirational',
        details: 'Leicester City’s 2015-2016 Premier League title win remains one of the most inspirational stories in sports. Defying odds of 5000-1, the Foxes’ incredible journey is a testament to teamwork, perseverance, and the unpredictable nature of football.',
        date: 'April 6, 2021'
    },
    {
        title: 'The role of advanced analytics in shaping modern football strategies',
        details: 'Advanced analytics are playing an increasingly pivotal role in shaping football strategies. Clubs are leveraging data to gain insights into player performance, injury prevention, and tactical analysis, leading to more informed decision-making on and off the pitch.',
        date: 'January 30, 2020'
    },
    {
        title: 'Everton’s fight against relegation: A story of resilience and teamwork',
        details: 'Everton’s recent campaign has been a story of resilience and teamwork in the face of relegation threats. The Toffees have rallied under pressure, securing crucial points in their fight for survival, showcasing the spirit and determination that epitomizes the Premier League.',
        date: 'June 19, 2019'
    }
];


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        setSelectedArticle(null);

        if (term !== '') {
            const filtered = articles.filter(article =>
                article.title.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredArticles(filtered);
        } else {
            setFilteredArticles(articles);
        }
    };

    const selectArticle = (article) => {
        setSelectedArticle(article);
    };

    const highlight = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part)}</span>;
    };

    return (
        <div className="search-container">
            <h1>Search ⚽</h1>
            <input
                type="text"
                onChange={handleSearch}
                placeholder="Search articles..."
                className="search-input"
            />
            <div className="results">
                {searchTerm && filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                        <div key={index} className="article" onClick={() => selectArticle(article)}>
                            {highlight(article.title, searchTerm)}
                        </div>
                    ))
                ) : (
                    <div>No articles found.</div>
                )}
            </div>
            {selectedArticle && (
                <div className="article-details">
                    <div className="article-title-date">
                        <h2>{selectedArticle.title}</h2>
                        <span className="article-date">{selectedArticle.date}</span>
                    </div>
                    <p>{selectedArticle.details}</p>
                </div>
            )}
        </div>
    );
}
export default Search;
