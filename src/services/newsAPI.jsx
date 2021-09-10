export const formatStory = (res) => 
    // console.log(res.articles);
    res.articles.map((story) => ({
        author: story.author,
        title: story.title,
        description: story.description
    }));

export const getNewsWithQuery = async (query) => {
    const res = await fetch(`http://newsapi.org/v2/everything?qInTitle=${query}&apiKey=${process.env.NEWS_API_KEY}`);
    const json = await res.json();
    return formatStory(json);
}