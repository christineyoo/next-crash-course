//For every function we're going to have a separate file. In our case, we'll have two:
    // Get all articles
    // Get a single article

import {articles} from '../../../data'

//Serving the articles from the API (data.js)
//This data comes from a file, but it could be from an SQL database
export default function handler(req, res) {
    res.status(200).json(articles)
}